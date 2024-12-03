import Projects from "@/components/projects";
import { getProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container max-w-2xl">
      <header className="mb-4">
        <h1 className="text-xl font-medium tracking-tight">Projects</h1>
        <p className="text-sm mt-1 text-muted-foreground">
          A collection of projects I&apos;ve worked on.
        </p>
      </header>
      <Projects projects={projects} />
    </div>
  );
}
