import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Alice",
    body: "WebStorm made website development a breeze! Their code completion and debugging tools saved us tons of time, allowing us to launch our website faster and focus on marketing.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "David",
    body: "Our developers love WebStorm! The clean UI and smart features make it easy to build complex websites. Since using it, our website development efficiency has skyrocketed.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Sarah",
    body: "Creating a professional website was a dream thanks to WebStorm. Its integration with Git version control helped us collaborate seamlessly and ensure a smooth development workflow.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Michael",
    body: "WebStorm's refactoring capabilities are a lifesaver! We were able to quickly clean up and optimize our website code, resulting in a faster and more user-friendly experience for our customers.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Emily",
    body: "The live preview feature in WebStorm was a game-changer for our website development process. It allowed us to see changes instantly, saving us time and minimizing errors.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Robert",
    body: "Our transition to a modern JavaScript framework like React was smooth thanks to WebStorm's fantastic support for the latest technologies. Our developers were able to build a cutting-edge website efficiently.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Olivia",
    body: "With WebStorm, maintaining and updating our website is a breeze. Their built-in code search and navigation features save us a ton of time, allowing us to focus on ongoing improvements.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "William",
    body: "Collaboration with our freelance developers became effortless thanks to WebStorm's support for remote development. Everyone had a smooth and efficient experience building our website.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Sophia",
    body: "WebStorm is like having a dedicated assistant for our developers. The built-in code analysis tools helped us catch potential errors early, ensuring a high-quality website launch.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Charles",
    body: "WebStorm's intuitive interface made learning web development easier for our new team members. They were able to get up to speed quickly and contribute to our website project efficiently.",
    img: "https://avatar.vercel.sh/jack",
  },
];

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4 py-10",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Comments() {
  return (
    <article className="relative py-10">
      <div className="relative flex mx-auto max-w-[78rem] flex-col items-center justify-center overflow-hidden rounded-lg  bg-background  ">
        <Marquee pauseOnHover className="[--duration:20s] z-10">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>
        {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee> */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background blur-3xl"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </div>
      <div className="absolute w-full h-[80%]  top-[10%] -z-10 blur-3xl">
        <div className=" w-full h-full bg-slate-300 bg-opacity-[0.001] top-0 -z-10  " />
      </div>
    </article>
  );
}
