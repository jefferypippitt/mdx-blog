import Image from "next/image";
// Remove the local import and use remote image
// import authorImage from "@/public/images/author/github-profile.webp";
import Link from "next/link";
import { TextLoop } from "@/components/text-loop";

const buildingSynonyms = [
  "building",
  "developing",
  "crafting",
  "shipping",
  "launching",
  "creating",
];
export default function About() {
  return (
    <section>
      <div className="flex items-center py-4">
        <div className="relative aspect-square w-[45px]">
          <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-zinc-300 dark:border-zinc-600">
            <Image
              src="https://github.com/jefferypippitt.png"
              alt="Jeffery Pippitt"
              fill
              priority
              className="object-cover rounded-full blur-[0.5px]"
            />
          </div>
        </div>
        <div className="ml-4 text-left space-y-1">
          <h1 className="font-medium">Hey, I&apos;m Jeffery</h1>
          <div className="text-sm text-muted-foreground">
            Web developer{" "}
            <span className="inline-block">
              <TextLoop interval={2.5}>
                {buildingSynonyms.map((word) => (
                  <span key={word}>{word}</span>
                ))}
              </TextLoop>
            </span>{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-800 hover:text-zinc-400 dark:text-zinc-200 dark:hover:text-zinc-200"
            >
              Next.js
            </Link>{" "}
            web apps.
          </div>
        </div>
      </div>
    </section>
  );
}
