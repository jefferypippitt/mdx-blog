import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-10 bg-background/80 backdrop-blur">
      <div className="container max-w-4xl py-2">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            jpippitt.io
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3">
              <Link
                href="/projects"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="/posts"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Posts
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
