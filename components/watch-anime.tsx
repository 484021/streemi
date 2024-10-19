"use client";
import EpisodesSection from "@/components/episodes-section";
import VideoDescription from "@/components/video-description";
import VideoPlayer from "@/components/video-player";
import VideoQuality from "@/components/video-quality";
import { Show, VideoData } from "@/lib/types";
import { useState } from "react";
import InstagramButton from "./instagram-button";

export default function WatchAnime({
  show,
  episodeStreams,
  episodeNumber,
}: {
  animeId: string;
  show: Show;
  episodeId?: string;
  episodeStreams: VideoData;
  episodeNumber: number;
}) {
  const [currentStreamUrl, setCurrentStreamUrl] = useState("");
  const currentEpisodeStreams = episodeStreams;
  const currentEpisode = episodeNumber;
  if (!currentStreamUrl) {
    setCurrentStreamUrl(
      episodeStreams.sources.find(
        (source) =>
          source.quality === "1080p" ||
          source.quality === "default" ||
          source.quality === "backup"
      )?.url || ""
    );
  }

  return (
    <>
      <div>
        <div className="relative rounded-lg overflow-hidden aspect-video">
          <VideoPlayer selectedStreamUrl={currentStreamUrl} />
        </div>
        <InstagramButton />
        <h1 className="text-2xl font-bold mt-4">
          {show.title} - {currentEpisode}
        </h1>

        <VideoQuality
          currentEpisodeStreams={currentEpisodeStreams}
          setCurrentStreamUrl={setCurrentStreamUrl}
        />
        <VideoDescription show={show} currentEpisode={currentEpisode} />
      </div>
      <div className="flex flex-col gap-4">
        <EpisodesSection show={show} currentEpisode={currentEpisode} />
      </div>
    </>
  );
}
