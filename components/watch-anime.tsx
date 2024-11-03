"use client";
import EpisodesSection from "@/components/episodes-section";
import VideoDescription from "@/components/video-description";
import VideoPlayer from "@/components/video-player";
import VideoQuality from "@/components/video-quality";
import { Show, VideoData } from "@/lib/types";
import { useState } from "react";
import InstagramButton from "./instagram-button";
import { AnimeFanSignup } from "./anime-fan-signup";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TelegramShareButton,
  FacebookIcon,
  XIcon,
  WhatsappIcon,
  RedditIcon,
  TelegramIcon,
} from "react-share";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TopAiringAnime from "./top-airing-anime";
import RecentEpisodes from "./recent-episodes";

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
  const currentEpisodeStreams = episodeStreams;
  const currentEpisode = episodeNumber;
  const [currentStreamUrl, setCurrentStreamUrl] = useState("");

  // Set default stream URL if not already set
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

  // Get the current path using usePathname
  const pathname = usePathname();
  const shareUrl = `https://streemi.app${pathname}`;

  return (
    <>
      <div className="">
        <div className="relative rounded-lg overflow-hidden aspect-video">
          <VideoPlayer selectedStreamUrl={currentStreamUrl} />
        </div>
        <h1 className="text-2xl font-bold mt-4 ">
          <Link href={`/anime/${show.title}`}>
            <span className="hover:underline">{show.title}</span>
          </Link>{" "}
          - Episode {currentEpisode}
        </h1>

        {/* Social Share Buttons */}
        <div className="flex space-x-4 mt-4">
          <FacebookShareButton url={shareUrl} hashtag={show.title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={shareUrl}
            title={`Watch ${show.title} Episode ${currentEpisode} for free no ads!`}
            hashtags={[
              show.title,
              "Streemi",
              "Anime",
              "Watch",
              "Free",
              "NoAds",
            ]}
          >
            <XIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton
            url={shareUrl}
            title={`Watch ${show.title} Episode ${currentEpisode} for free no ads!`}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <RedditShareButton
            url={shareUrl}
            title={`Watch ${show.title} Episode ${currentEpisode} for free no ads!`}
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
          <TelegramShareButton
            url={shareUrl}
            title={`Watch ${show.title} Episode ${currentEpisode} for free no ads!`}
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>

        <AnimeFanSignup />
        <VideoQuality
          currentEpisodeStreams={currentEpisodeStreams}
          setCurrentStreamUrl={setCurrentStreamUrl}
        />
        <VideoDescription show={show} currentEpisode={currentEpisode} />
        <InstagramButton />
      </div>
      <div className="flex flex-col gap-4">
        <EpisodesSection show={show} currentEpisode={currentEpisode} />
      </div>
      <div>
        <TopAiringAnime />
        <RecentEpisodes />
      </div>
    </>
  );
}
