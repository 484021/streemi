import { getAnimeById } from "@/actions/actions";
import SimplifiedEpisodesSectionComponent from "@/components/simplified-episodes-section";
import { animeKeywords } from "@/lib/constants";
// import EpisodesSection from "@/components/episodes-section";
import { Show } from "@/lib/types";
import Image from "next/image";
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

export default async function Page({ params }: { params: { id: string } }) {
  const { id: animeId } = params;
  const show: Show = await getAnimeById(animeId);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{show.title}</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Released on {show.releaseDate}
          </p>
        </div>
        <Image
          src={show.image}
          alt={show.title}
          width={600}
          height={400}
          className="rounded-lg overflow-hidden"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
          priority
        />
      </section>
      <section className="mt-12 md:mt-16 grid gap-8">
        <div>
          <h2 className="text-2xl font-bold">Description</h2>
          <p className="text-muted-foreground mt-2">{show.description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold">Genres</h3>
            <ul className="mt-2 space-y-1">
              {show.genres &&
                show.genres.map((genre, index) => (
                  <li key={index} className="text-muted-foreground">
                    {genre}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Sub/Dub</h3>
            <p className="mt-2 text-muted-foreground">{show.subOrDub}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Type</h3>
            <p className="mt-2 text-muted-foreground">{show.type}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Other Name</h3>
            <p className="mt-2 text-muted-foreground">{show.otherName}</p>
          </div>
        </div>
      </section>
      <SimplifiedEpisodesSectionComponent show={show} />
    </div>
  );
}
