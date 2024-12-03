export function Footer() {
  return (
    <footer className="border-t py-4">
      <div className="container max-w-4xl">
        <div className="flex flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jeffery Pippitt
          </p>
          <div className="flex gap-3">
            <a
              href="https://twitter.com"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
