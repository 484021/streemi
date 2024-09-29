"use client";

import { CONSUMET_API_URL } from "@/lib/constants";
import { Data, EpisodeResult } from "@/lib/types";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import luffy from "@/public/luffy.jpg";
import Image from "next/image";
import AnimeSearchForm from "../anime-search";

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
    <section className="relative w-full h-[80vh] overflow-hidden">
      <Image src={luffy} alt="luffy" className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center space-y-6 px-4 md:px-0 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Discover the Best Anime for Free
          </h1>
          <div className="mx-auto w-full">
            <AnimeSearchForm />
          </div>
          <div className="flex justify-center">
            <p className="text-lg md:text-xl text-white max-w-[700px] text-center">
              Immerse yourself in the captivating world of anime. Stream the
              latest episodes, explore classic series, and discover hidden gems.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Start Watching
          </Link>
        </div>
      </div>
    </section>
  );
}
