"use client";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { Episode } from "@/lib/types";

type EpisodesSectionProps = {
  episodes: Episode[];
};

export default function EpisodesSection({ episodes }: EpisodesSectionProps) {
  // State to track the current page (i.e., which set of 10 episodes to display)
  const [page, setPage] = useState(1);

  const itemsPerPage = 24;

  // Calculate the number of pages (sets of 10 episodes)
  const totalPages = Math.ceil(episodes.length / itemsPerPage);

  // Calculate the episodes to display based on the current page
  const startIndex = (page - 1) * itemsPerPage;
  const selectedEpisodes = episodes.slice(startIndex, startIndex + itemsPerPage);

  // Handle dropdown change
  const handlePageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPage(Number(event.target.value));
  };

  return (
    <section className="mt-12 md:mt-16">
      <h2 className="text-2xl font-bold">Episodes</h2>

      {/* Dropdown for selecting the page */}
      <div className="mt-4">
        <label htmlFor="page-select" className="mr-2 font-bold">
          Select Page:
        </label>
        <select
          id="page-select"
          value={page}
          onChange={handlePageChange}
          className="p-2 border border-gray-300 rounded-lg"
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {`Episodes ${index * itemsPerPage + 1}-${Math.min(
                (index + 1) * itemsPerPage,
                episodes.length
              )}`}
            </option>
          ))}
        </select>
      </div>

      {/* Display the selected episodes */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 mt-6">
        {selectedEpisodes.map((episode, index) => (
          <Link
            key={index}
            href={`/watch-anime/${episode.id}`}
            className="bg-muted rounded-lg overflow-hidden transition-all hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            prefetch={false}
          >
            <div className="p-4 flex items-center justify-center">
              <div className="text-lg font-bold">{episode.number}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
