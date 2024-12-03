import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "content", "projects");

export type Project = {
  metadata: ProjectMetadata;
  content: string;
};

export type ProjectMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  url?: string;
  tech?: string[];
  slug: string;
};

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data, content } = matter(fileContent);
    return { metadata: { ...data, slug }, content };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}

export async function getProjects(limit?: number): Promise<Project[]> {
  try {
    // Check if directory exists
    if (!fs.existsSync(rootDirectory)) {
      console.warn(`Directory not found: ${rootDirectory}`);
      return [];
    }

    const files = fs.readdirSync(rootDirectory).filter(file => file.endsWith('.mdx'));

    if (!files.length) {
      console.warn('No MDX files found in projects directory');
      return [];
    }

    const projects = files
      .map((file) => {
        try {
          const slug = file.replace(/\.mdx$/, "");
          const filePath = path.join(rootDirectory, file);
          const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
          const { data, content } = matter(fileContent);
          return { metadata: { ...data, slug } as ProjectMetadata, content };
        } catch (error) {
          console.error(`Error processing file ${file}:`, error);
          return null;
        }
      })
      .filter((project): project is Project => project !== null)
      .sort((a, b) => {
        if (
          new Date(a.metadata.publishedAt ?? "") <
          new Date(b.metadata.publishedAt ?? "")
        ) {
          return 1;
        }
        return -1;
      });

    return limit ? projects.slice(0, limit) : projects;
  } catch (error) {
    console.error('Error getting projects:', error);
    return [];
  }
}

export function getProjectMetadata(filepath: string): ProjectMetadata {
  try {
    const slug = filepath.replace(/\.mdx$/, "");
    const filePath = path.join(rootDirectory, filepath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data } = matter(fileContent);
    return { ...data, slug };
  } catch (error) {
    console.error('Error getting project metadata:', error);
    return { slug: filepath.replace(/\.mdx$/, "") };
  }
}