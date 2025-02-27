import { getPosts } from "@/lib/posts";
import Posts from "@/components/posts";
import PostLink from "@/components/post-link";


export default async function RecentPosts() {
  const posts = await getPosts(2);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-medium tracking-tight mb-3">Recent Posts</h1>
        <PostLink />
      </div>
      <Posts posts={posts} />
    </div>
  );
}
