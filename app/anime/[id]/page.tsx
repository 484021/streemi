"use client";
import EpisodesSection from "@/components/episodes-section";
import { CONSUMET_API_URL } from "@/lib/constants";
import { Episode, Show } from "@/lib/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { id: animeId } = params;

  const url = CONSUMET_API_URL + `anime/gogoanime/info/${animeId}`;

  const [show, setShow] = useState<Show>({} as Show);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setShow(data);
        setEpisodes(data.episodes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url, show]);
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{show.title}</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Released on {show.releaseDate}
          </p>
        </div>
        <Image
          src={show.image}
          alt={show.title}
          width={600}
          height={400}
          className="rounded-lg overflow-hidden"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
      </section>
      <section className="mt-12 md:mt-16 grid gap-8">
        <div>
          <h2 className="text-2xl font-bold">Description</h2>
          <p className="text-muted-foreground mt-2">{show.description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold">Genres</h3>
            <ul className="mt-2 space-y-1">
              {show.genres &&
                show.genres.map((genre, index) => (
                  <li key={index} className="text-muted-foreground">
                    {genre}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Sub/Dub</h3>
            <p className="mt-2 text-muted-foreground">{show.subOrDub}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Type</h3>
            <p className="mt-2 text-muted-foreground">{show.type}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Other Name</h3>
            <p className="mt-2 text-muted-foreground">{show.otherName}</p>
          </div>
        </div>
      </section>
      <EpisodesSection episodes={episodes} />
      {/* <section className="mt-12 md:mt-16">
        <h2 className="text-2xl font-bold">Episodes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {episodes.map((episode, index) => (
            <Link
              key={index}
              href={`/watch-anime/${episode.id}`}
              className="bg-muted rounded-lg overflow-hidden transition-all hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              prefetch={false}
            >
              <div className="p-4">
                <div className="text-lg font-bold">
                  Episode {episode.number}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section> */}
    </div>
  );
}
