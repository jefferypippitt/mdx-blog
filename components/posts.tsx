import Link from "next/link";
import { PostMetadata } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className="space-y-3">
      {posts.map((post) => (
        <li key={post.slug} className="flex items-start">
          <span className="mt-2 mr-3 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
          <div className="min-w-0 flex-1">
            <Link href={`/posts/${post.slug}`} className="group block">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium tracking-tight group-hover:text-gray-500">
                  {post.title}
                </span>
                {post.publishedAt && (
                  <time className="shrink-0 text-xs text-muted-foreground">
                    {formatDate(post.publishedAt)}
                  </time>
                )}
              </div>
              {post.summary && (
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {post.summary}
                </p>
              )}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
