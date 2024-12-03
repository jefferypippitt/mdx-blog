import { getProjects } from "@/lib/projects";
import Projects from "@/components/projects";
import ProjectsLink from "@/components/projects-link";
export default async function RecentProjects() {
  const projects = await getProjects(2);

  if (!projects || projects.length === 0) {
    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-medium tracking-tight mb-3">Featured Projects</h1>
          <ProjectsLink />
        </div>
        <p className="text-sm text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-medium tracking-tight mb-3 text-muted-foreground">Featured Projects</h1>
        <ProjectsLink />
      </div>
      <Projects projects={projects} />
    </div>
  );
}