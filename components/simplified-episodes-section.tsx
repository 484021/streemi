"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SimplifiedEpisodesSectionComponent({
  show = {
    id: "1",
    title: "Sample Show",
    image: "/placeholder.svg",
    episodes: Array.from({ length: 500 }, (_, i) => ({
      id: `${i + 1}`,
      number: i + 1,
    })),
  },
}) {
  const [selectedRange, setSelectedRange] = useState("1-50");
  const itemsPerPage = 50;
  const totalPages = Math.ceil(show.episodes.length / itemsPerPage);

  const ranges = Array.from({ length: totalPages }, (_, i) => {
    const start = i * itemsPerPage + 1;
    const end = Math.min((i + 1) * itemsPerPage, show.episodes.length);
    return `${start}-${end}`;
  });

  const [start, end] = selectedRange.split("-").map(Number);
  const selectedEpisodes = show.episodes.slice(start - 1, end);

  return (
    <section className="mt-8 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Episodes</h2>
        <Select value={selectedRange} onValueChange={setSelectedRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select episodes" />
          </SelectTrigger>
          <SelectContent>
            {ranges.map((range) => (
              <SelectItem key={range} value={range}>
                Episodes {range}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
        {selectedEpisodes.map((episode) => (
          <Link
            href={`/sp-anime/${show.id}/${episode.id}`}
            key={episode.id}
            className="block"
          >
            <div className="rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative aspect-video">
                <Image
                  src={show.image}
                  alt={`${show.title} Episode ${episode.number} Thumbnail`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-2 text-center">
                <span className="font-medium text-sm">Ep {episode.number}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
