"use client";
import { CONSUMET_API_URL } from "@/lib/constants";
import { EpisodeResult } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RecentEpisodes() {
  const url = CONSUMET_API_URL + `anime/gogoanime/recent-episodes`;
  const [recentEpisodes, setRecentEpisodes] = useState<EpisodeResult[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRecentEpisodes(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url, recentEpisodes]);

  return (
    <section className="w-full py-7 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center w-full mx-auto">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Recent Episodes
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {recentEpisodes.slice(0, 6).map((episode) => (
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
              <Link
                href={`/watch-anime/${episode.episodeId}`}
                className="absolute inset-0 z-10"
                prefetch={false}
              >
              </Link>
              <Image
                src={episode.image}
                width={400}
                height={225}
                alt="Episode thumbnail"
                className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <div className="p-4 flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold tracking-tight">
                  {episode.title}
                </h3>
                <p className="mt-auto text-sm text-muted-foreground">
                  Episode {episode.episodeNumber}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
