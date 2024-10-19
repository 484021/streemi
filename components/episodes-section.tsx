"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image"; // Import Image from Next.js
import { Episode, Show } from "@/lib/types";
import { toast } from "sonner";
import { Button } from "./ui/button";
import Link from "next/link";

type EpisodesSectionProps = {
  show: Show;
  currentEpisode: number;
};

export default function EpisodesSection({
  show,
  currentEpisode,
}: // handleChangeEpisode,
EpisodesSectionProps) {
  // State to track the current page (i.e., which set of episodes to display)

  const episodes: Episode[] = show.episodes;
  const nextEpisodeId =
    show.episodes.find((episode) => episode.number === currentEpisode + 1)
      ?.id || "";
  const prevEpisodeId =
    show.episodes.find((episode) => episode.number === currentEpisode - 1)
      ?.id || "";
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  // Calculate the number of pages
  const totalPages = Math.ceil(episodes.length / itemsPerPage);

  // Calculate the episodes to display based on the current page
  const startIndex = (page - 1) * itemsPerPage;
  const selectedEpisodes = episodes.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle dropdown change
  const handlePageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPage(Number(event.target.value));
  };

  return (
    <section className="">
      <h2 className="text-2xl font-bold">Episodes</h2>
      <div className="flex gap-2 items-center justify-between my-4">
        <Button
          onClick={() => {
            toast(`Changing to Episode ${currentEpisode - 1}`);
          }}
          disabled={currentEpisode === 1 ? true : false}
        >
          <Link href={`/sp-anime/${show.id}/${prevEpisodeId}`}>
            Episode {currentEpisode - 1}
          </Link>
        </Button>
        <Button
          onClick={() => {
            toast(`Changing to Episode ${currentEpisode + 1}`);
          }}
          disabled={currentEpisode === episodes.length ? true : false}
        >
          <Link href={`/sp-anime/${show.id}/${nextEpisodeId}`}>
            Episode {currentEpisode + 1}
          </Link>
        </Button>
      </div>
      {/* Dropdown for selecting the page */}
      <div className="my-4">
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
              {`Episodes ${index * itemsPerPage + 1} - ${Math.min(
                (index + 1) * itemsPerPage,
                episodes.length
              )}`}
            </option>
          ))}
        </select>
      </div>

      {/* Display the selected episodes */}
      <div className="grid gap-4">
        {selectedEpisodes.map((episode) => (
          <Link href={`/sp-anime/${show.id}/${episode.id}`} key={episode.id}>
            <div
              className={`grid gap-4 ${
                episode.number === currentEpisode ? "bg-muted" : ""
              } rounded`}
              key={episode.id}
              // onClick={() => {
              //   handleChangeEpisode(episode.id);
              //   setCurrentEpisode(episode.number);
              //   toast(`Changing to Episode ${episode.number}`);
              // }}
            >
              <div className="flex gap-4 items-center">
                <div className="relative rounded-lg overflow-hidden w-[100px] aspect-video">
                  <Image
                    src={show.image}
                    alt="Episode Thumbnail"
                    className="object-cover"
                    width="178"
                    height="100"
                    style={{ aspectRatio: "178/100", objectFit: "cover" }}
                  />
                </div>
                <div className="">
                  <div className="text-lg font-medium line-clamp-1">
                    Episode {episode.number}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
