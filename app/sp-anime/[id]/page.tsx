import { getAnimeById } from "@/actions/actions";

import WatchAnime from "@/components/watch-anime";
import { keywords } from "@/lib/constants";
import { Show } from "@/lib/types";
import { notFound } from "next/navigation";

export const runtime = "edge";


export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id: animeId } = params;
  const show: Show = await getAnimeById(animeId);
  return {
    title: `Watch ${show.title}`,
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

export default async function Page({ params }: { params: { id: string } }) {
  const { id: animeId } = params;
  const show: Show = await getAnimeById(animeId);
  if (!show.id) {
    return notFound();
  }

  return (
    <div className="md:grid md:grid-cols-[1fr_300px] gap-6 p-6 md:p-8 lg:p-10 flex flex-col">
      <WatchAnime animeId={animeId} />
    </div>
  );
}
