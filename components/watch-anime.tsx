"use client";
import { getAnimeById, getEpisodeStreams } from "@/actions/actions";
import EpisodesSection from "@/components/episodes-section";
import Loading from "@/components/loading";
import VideoDescription from "@/components/video-description";
import VideoPlayer from "@/components/video-player";
import VideoQuality from "@/components/video-quality";
import { Show, VideoData } from "@/lib/types";
import { useEffect, useState } from "react";
import InstagramButton from "./instagram-button";

export default function WatchAnime({ animeId }: { animeId: string }) {
  const [currentStreamUrl, setCurrentStreamUrl] = useState("");
  const [currentEpisodeStreams, setCurrentEpisodeStreams] =
    useState<VideoData>();
  const [show, setShow] = useState<Show>();
  const [currentEpisode, setCurrentEpisode] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const show: Show = await getAnimeById(animeId);
      setShow(show);
      if (!currentEpisode) {
        setCurrentEpisode(show.episodes.length);
      }
      const episodeStreams: VideoData = await getEpisodeStreams(
        show.episodes[show.episodes.length - 1].id
      );
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
      if (!currentEpisodeStreams) {
        setCurrentEpisodeStreams(episodeStreams);
      }
    };
    fetchData();
  }, [animeId]);

  const handleChangeEpisode = async (episodeId: string) => {
    const episodeStreams: VideoData = await getEpisodeStreams(episodeId);
    setCurrentEpisodeStreams(episodeStreams);
    setCurrentStreamUrl(
      episodeStreams.sources.find(
        (source) =>
          source.quality === "1080p" ||
          source.quality === "default" ||
          source.quality === "backup"
      )?.url || ""
    );
  };

  if (!show || !currentStreamUrl || !currentEpisodeStreams) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <div className="relative rounded-lg overflow-hidden aspect-video">
          <VideoPlayer selectedStreamUrl={currentStreamUrl} />
        </div>
        <InstagramButton />
        <h4 className="mt-4">*DM on Instagram for bug fixes and feature requests*</h4>
        <h1 className="text-2xl font-bold mt-4">
          {show.title} - {currentEpisode}
        </h1>

        <VideoQuality
          currentEpisodeStreams={currentEpisodeStreams}
          setCurrentStreamUrl={setCurrentStreamUrl}
        />
        <VideoDescription show={show} currentEpisode={currentEpisode} />
        {/* <SocialShare currentLink={`https://streemi.app/${pathname}`}/> */}
      </div>
      <div className="flex flex-col gap-4">
        <EpisodesSection
          show={show}
          handleChangeEpisode={handleChangeEpisode}
          setCurrentEpisode={setCurrentEpisode}
          currentEpisode={currentEpisode}
        />
      </div>
    </>
  );
}
