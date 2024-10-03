import {  VideoData } from "@/lib/types";
import { getEpisodeStreams } from "@/actions/actions";
import EpisodePlayer from "@/components/episode-player";

export default async function Page({ params }: { params: { id: string } }) {
  const { id: episodeId } = params;
  // const show: Show = await getAnimeById(animeId);
  const episodeStreams: VideoData = await getEpisodeStreams(episodeId);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="bg-background rounded-lg border shadow-sm overflow-hidden">
        <EpisodePlayer episodeStreams={episodeStreams} />
        {/* <EpisodesSection show={show}/> */}
      </div>
    </div>
  );
}
