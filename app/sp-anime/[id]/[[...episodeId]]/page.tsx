import { getAnimeById, getEpisodeStreams } from "@/actions/actions";
import WatchAnime from "@/components/watch-anime";
import { keywords } from "@/lib/constants";
import { Show, VideoData } from "@/lib/types";
import { notFound } from "next/navigation";

export const runtime = "edge";

// Metadata generation
export async function generateMetadata({
  params,
}: {
  params: { id: string; episodeId?: string[] }; // Note the change to `string[]`
}) {
  const { id: animeId, episodeId: episodeIdFromParams } = params;

  const show: Show = await getAnimeById(animeId);
  const episodeId =
    episodeIdFromParams?.[0] || show.episodes[show.episodes.length - 1].id;
  const episodeNumber =
    show.episodes.find((episode) => episode.id === episodeId)?.number ||
    show.totalEpisodes;

  if (!show) return notFound();

  return {
    title: `Watch ${show.title} Episode ${episodeNumber}`,
    description: show.description,
    openGraph: {
      images: [show.image],
    },
    twitter: {
      card: "summary_large_image",
      images: [show.image],
    },
    keywords: [
      ...keywords,
      show.title,
      show.description,
      show.genres,
      show.otherName,
      show.releaseDate,
      show.status,
      show.subOrDub,
      show.type,
      show.totalEpisodes,
    ],
  };
}

export default async function Page({
  params,
}: {
  params: { id: string; episodeId?: string[] }; // Note the change to `string[]`
}) {
  const { id: animeId, episodeId: episodeIdFromParams } = params;

  // Fetch the show details based on animeId
  const show: Show = await getAnimeById(animeId);

  // If episodeIdFromParams exists, access the first item in the array
  const episodeId =
    episodeIdFromParams?.[0] || show.episodes[show.episodes.length - 1].id;

  if (!show || !show.id) {
    return notFound(); // Handle the case when show doesn't exist
  }

  // Find the episode number based on episodeId
  const episodeNumber =
    show.episodes.find((episode) => episode.id === episodeId)?.number ||
    show.totalEpisodes;

  // Fetch episode streams using the determined episodeId
  const episodeStreams: VideoData = await getEpisodeStreams(episodeId);

  return (
    <div className="md:grid md:grid-cols-[1fr_300px] gap-6 p-6 md:p-8 lg:p-10 flex flex-col ">
      <WatchAnime
        animeId={animeId}
        show={show}
        episodeId={episodeId}
        episodeStreams={episodeStreams}
        episodeNumber={episodeNumber}
      />
    </div>
  );
}
