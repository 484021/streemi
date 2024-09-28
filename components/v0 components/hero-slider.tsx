"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { CONSUMET_API_URL } from "@/lib/constants";
import { Data, EpisodeResult } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

//fetch recentEpisodes

export default function HeroSlider() {
  const url = CONSUMET_API_URL + "anime/gogoanime/recent-episodes";

  const [data, setData] = useState<Data[]>([]);
  const [results, setResults] = useState<EpisodeResult[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setResults(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url, data]);

  return (
    <div className="w-full">
      <Carousel className="relative w-full">
        <CarouselContent>
          {results.map((result) => (
            <CarouselItem key={result.id}>
              <div className="relative h-[600px] w-full overflow-hidden">
                <Image
                  src={result.image}
                  alt="Hero Slide"
                  className="h-full w-full object-cover"
                  width="1200"
                  height="600"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-4 text-center text-white">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                      {result.title}
                    </h1>
                    <p className="max-w-xl text-lg md:text-xl">
                      Episode {result.episodeNumber}
                    </p>
                    <Link
                      href={`/anime/${result.id}`}
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Watch
                    </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
          {/* <CarouselItem>
            <div className="relative h-[600px] w-full overflow-hidden">
              <Image
                src={}
                alt="Hero Slide 1"
                className="h-full w-full object-cover"
                width="1200"
                height="600"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-gradient-to-t from-black/50 to-transparent px-4 text-center text-white">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  {}
                </h1>
                <p className="max-w-xl text-lg md:text-xl">
                  Discover our innovative solutions and take your business to
                  new heights.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Watch
                </Link>
              </div>
            </div>
          </CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
        <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 space-x-2" />
      </Carousel>
    </div>
  );
}
