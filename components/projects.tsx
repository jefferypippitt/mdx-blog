import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";

import { Tilt } from "./tilt";
import { ChevronRight } from "lucide-react";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  if (!projects) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <Tilt key={project.metadata.slug} rotationFactor={8} isRevese>
          <Link
            href={`/projects/${project.metadata.slug}`}
            className="group block h-full"
          >
            <article className="flex h-[280px] w-full flex-col overflow-hidden rounded-lg border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-card">
              {project.metadata.image && (
                <div className="relative h-48 w-full shrink-0 overflow-hidden">
                  <Image
                    src={project.metadata.image}
                    alt={project.metadata.title || ""}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex min-h-0 flex-1 flex-col p-4">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <h1 className="text-sm leading-snug text-zinc-950 dark:text-zinc-50 truncate">
                        {project.metadata.title}
                      </h1>
                      <ChevronRight className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <p className="text-xs text-zinc-700 dark:text-zinc-400 line-clamp-2">
                      {project.metadata.summary}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </Tilt>
      ))}
    </div>
  );
}