import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="container max-w-2xl">
      <header className="mb-8">
        <h1 className="text-xl font-medium tracking-tight">Writing</h1>
        <p className="text-sm mt-2 text-muted-foreground">
          Thoughts on software development, design, and technology.
        </p>
      </header>
      <Posts posts={posts} />
    </div>
  );
}
