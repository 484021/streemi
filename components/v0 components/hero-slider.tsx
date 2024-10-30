"use client";
import Link from "next/link";
import luffy from "@/public/luffy.jpg";
import Image from "next/image";
import AnimeSearchForm from "../anime-search";
import { Button } from "../ui/button";
import { toast } from "sonner";

//fetch recentEpisodes

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden shadow-inner">
      <Image
        src={luffy}
        alt="luffy"
        className="object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center space-y-6 px-4 md:px-0 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-violet-200 capitalize">
            Watch your favorite animes for free without ads!
          </h1>
          <div className="mx-auto w-full">
            <AnimeSearchForm />
          </div>
          <div className="flex justify-center">
            <p className="text-lg md:text-xl max-w-[700px] text-center text-violet-200 capitalize">
              We are commited to provide the best streaming experience with no
              ads, no geo-blocking and over 10,000 titles.
            </p>
          </div>
          <Link
            href="/search/anime-list"
            // className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <Button
              className="mt-3 p-6 hover:scale-105 transition text-2xl"
              onClick={() =>
                toast("Getting all the animes!", {
                  description: "Use the search bar or select genres to filter.",
                  action: {
                    label: "Close",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              Watch Now!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
