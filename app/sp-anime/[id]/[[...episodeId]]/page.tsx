import { getAnimeById, getEpisodeStreams } from "@/actions/actions";
import WatchAnime from "@/components/watch-anime";
import { animeKeywords } from "@/lib/constants";
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

  const pageKeywords = [
    `watch ${show.title}`,
    `watch ${show.title} ep`,
    `${show.title} stream`,
    `watch ${show.title} online`,
    `crunchyroll ${show.title}`,
    `watch ${show.title} free`,
    `${show.title} dub crunchyroll`,
    `watch ${show.title} online free`,
    `seiko ${show.title}`,
    `watch ${show.title} dubbed`,
    `${show.title} dubbed crunchyroll`,
    `${show.title} english dubbed`,
    `${show.title} all episodes`,
    `${show.title} free stream`,
    `seiko ${show.title} watch`,
    `${show.title} dubs`,
    `${show.title} free streaming`,
    `${show.title} watch order`,
    `${show.title} anime free`,
    `${show.title} current episode`,
    `${show.title} anime watch online`,
    `${show.title} anime crunchyroll`,
    `${show.title} anime episode`,
    `zoro watch`,
    `gogoanime ${show.title}`,
    `most recent ${show.title} episode`,
    `${show.title} recent episode`,
    `${show.title} anime watch free`,
    `${show.title} full episodes`,
    `${show.title} online stream`,
    `${show.title} english dubbed funimation`,
    `${show.title} streaming crunchyroll`,
    `${show.title} hulu`,
    `${show.title} anime stream`,
    `watch ${show.title} english dubbed crunchyroll`,
    `apps to watch ${show.title} for free`,
    `best place to watch ${show.title}`,
    `watch ${show.title} dubbed crunchyroll`,
    `watch ${show.title} on crunchyroll`,
    `${show.title} film red full movie free download`,
    `${show.title} episodes online`,
    `${show.title} streaming reddit`,
    `places to watch ${show.title}`,
    `${show.title} stream online reddit`,
    `${show.title} streaming services`,
    `${show.title} full episodes funimation`,
    `watch ${show.title} streaming`,
    `${show.title} all episodes dubbed`,
    `best way to watch ${show.title}`,
    `watch ${show.title} dub crunchyroll`,
    `${show.title} dub where to watch`,
    `${show.title} how to watch`,
    `watch ${show.title} no ads`,
    `watch ${show.title} hd`,
    `${show.title} dub netflix`,
    `${show.title} episodes english dubbed crunchyroll`,
    `${show.title} english dub episodes`,
    `${show.title} watch free reddit`,
    `${show.title} in english on crunchyroll`,
    `watch ${show.title} anime`,
    `${show.title} episodes in order`,
    `stream ${show.title} online free`,
    `watch ${show.title} red sub`,
    `stream ${show.title} dubbed`,
    `best site to watch ${show.title}`,
    `free ${show.title} dub`,
    `watch ${show.title} in chronological order`,
    `${show.title} season 1 episode 1`,
    `${show.title} all episodes free`,
    `dubbed ${show.title} on crunchyroll`,
    `watch ${show.title} series`,
    `stream ${show.title} free`,
    `best way to watch ${show.title} fast`,
  ];

  return {
    title: `Watch ${show.title} Episode ${episodeNumber} For Free No Ads`,
    description: show.description,
    openGraph: {
      images: [show.image],
    },
    twitter: {
      card: "summary_large_image",
      images: [show.image],
    },
    keywords: [
      `Watch ${show.title}`,
      `Watch ${show.title} online free`,
      `Watch ${show.title} leaked episodes`,
      `Watch ${show.title} episode`,
      `Watch ${show.title} online free reddit`,
      show.title,
      show.genres,
      show.otherName,
      show.status,
      show.subOrDub,
      show.type,
      show.totalEpisodes,
      ...animeKeywords,
      ...pageKeywords,
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
  let episodeId =
    episodeIdFromParams?.[0] || show.episodes[show.episodes.length - 1].id;

  if (!show || !show.id) {
    return notFound(); // Handle the case when show doesn't exist
  }

  // Find the episode number based on episodeId
  let episodeNumber =
    show.episodes.find((episode) => episode.id === episodeId)?.number ||
    show.totalEpisodes;

  // Fetch episode streams using the determined episodeId
  let episodeStreams: VideoData = await getEpisodeStreams(episodeId);

  if (
    !episodeStreams ||
    !episodeStreams.sources ||
    episodeStreams.sources.length === 0
  ) {
    console.log(
      "No streams found for episodeId, fetching first episode streams."
    );
    const firstEpisodeId = show.episodes[0].id;
    episodeStreams = await getEpisodeStreams(firstEpisodeId);

    // Update the episodeId and episodeNumber to reflect the first episode
    episodeId = firstEpisodeId;
    episodeNumber = show.episodes[0].number;
  }
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
