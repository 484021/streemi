"use client";
import { getAnimeById, getEpisodeStreams } from "@/actions/actions";
import EpisodesSection from "@/components/episodes-section";
import Loading from "@/components/loading";
import VideoDescription from "@/components/video-description";

import VideoPlayer from "@/components/video-player";
import VideoQuality from "@/components/video-quality";
import { Show, VideoData } from "@/lib/types";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { id: animeId } = params;
  const [currentStreamUrl, setCurrentStreamUrl] = useState("");
  const [currentEpisodeStreams, setCurrentEpisodeStreams] =
    useState<VideoData>();
  const [show, setShow] = useState<Show>();
  const [currentEpisode, setCurrentEpisode] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const show: Show = await getAnimeById(animeId);
      setShow(show);
      const episodeStreams: VideoData = await getEpisodeStreams(
        show.episodes[0].id
      );
      if (!currentStreamUrl) {
        setCurrentStreamUrl(episodeStreams.sources[0].url);
      }
      if (!currentEpisodeStreams) {
        setCurrentEpisodeStreams(episodeStreams);
      }
    };
    fetchData();
  }, [animeId, currentStreamUrl, currentEpisodeStreams]);

  const handleChangeEpisode = async (episodeId: string) => {
    const episodeStreams: VideoData = await getEpisodeStreams(episodeId);
    setCurrentEpisodeStreams(episodeStreams);
    setCurrentStreamUrl(episodeStreams.sources[0].url);
  };

  if (!show || !currentStreamUrl || !currentEpisodeStreams) {
    return <Loading />;
  }

  return (
    <div className="md:grid md:grid-cols-[1fr_300px] gap-6 p-6 md:p-8 lg:p-10 flex flex-col">
      <div>
        <div className="relative rounded-lg overflow-hidden aspect-video">
          <VideoPlayer selectedStreamUrl={currentStreamUrl} />
        </div>
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
        <EpisodesSection
          show={show}
          handleChangeEpisode={handleChangeEpisode}
          setCurrentEpisode={setCurrentEpisode}
          currentEpisode={currentEpisode}
        />
      </div>
    </div>
  );
}
