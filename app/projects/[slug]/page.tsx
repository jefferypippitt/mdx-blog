import MDXContent from "@/components/mdx-content";
import { getProjects, getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.metadata.slug }));
}

export default async function Project({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  const { metadata, content } = project;
  const { title, author, publishedAt } = metadata;
  return (
    <article className="container max-w-2xl">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        <span>Go back</span>
      </Link>

      <header>
        <h1 className="text-2xl font-medium tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-3 text-xs text-muted-foreground flex flex-col">
          <span>By: {author}</span>
          <span className="flex items-center mt-2">
            Date: {formatDate(publishedAt ?? "")}
          </span>
        </p>
      </header>

      <div className="prose dark:prose-invert mt-4">
        <MDXContent source={content} />
      </div>
    </article>
  );
}
