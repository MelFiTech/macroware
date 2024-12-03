import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from 'next/image';

const reviews = [
  {
    name: "Jack Thompson",
    position: "CEO", 
    company: "TechCorp",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill Anderson",
    position: "CTO",
    company: "InnovateLabs", 
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John Smith",
    position: "Product Manager",
    company: "FutureWorks",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane Wilson",
    position: "Director of Engineering",
    company: "BuildTech",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny Brown",
    position: "Lead Designer",
    company: "CreativeFlow",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James Davis",
    position: "VP of Operations",
    company: "GlobalTech",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  position,
  company,
  body,
}: {
  img: string;
  name: string;
  position: string;
  company: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mx-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image 
          className="rounded-full"
          width={32}
          height={32}
          alt={`${name}'s avatar`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-gray-900 dark:text-black">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500">{position} at {company}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-600">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-green-50 to-blue-50 rounded-full text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-5xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s] [--direction:-1]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
        </div>
      </div>
    </section>
  );
}