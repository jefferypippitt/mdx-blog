import Intro from "@/components/about";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import Skills from "@/components/skills";
export default function Home() {
  return (
    <div className="container max-w-2xl space-y-10">
      <Intro />
      <section>
        <RecentPosts />
      </section>
      <section>
        <RecentProjects />
      </section>
      <section>
        <Skills />
      </section>
    </div>
  );
}
