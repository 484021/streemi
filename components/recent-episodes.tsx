import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { getRecentEpisodes } from "@/actions/actions";

type Anime = {
  id: string;
  episodeId: string;
  title: string;
  image: string;
  url: string;
  episodeNumber: number;
}

export default async function RecentEpisodes() {

  const recentEpisodes = await getRecentEpisodes();

  return (
    <section className="px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Recent Episodes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {recentEpisodes.map((anime: Anime) => (
            <Card className="w-auto h-full" key={anime.id}>
              <Image
                src={anime.image}
                width={300}
                height={400}
                alt="Anime Thumbnail"
                className="rounded-t-lg"
                style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">{anime.title}</h3>
                {/* map through genres */}
                <p className="text-sm text-[#666] mb-4">
                  Episode {anime.episodeNumber}
                </p>
                {/* <Rating value={anime.rating} readOnly /> */}

                <Link href={`/sp-anime/${anime.id}`}>
                  <Button className="mt-auto">Watch Now</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* <div className="container px-4 md:px-6 flex flex-col items-center justify-center w-full mx-auto">
  <div className="mb-8 md:mb-10 lg:mb-12">
    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
      Recent Episodes
    </h2>
  </div>
  <div className="grid gap-6 md:grid-cols-3">
    {recentEpisodes.slice(0, 6).map((episode) => (
      <div
        className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-105 dark:shadow-violet-950"
        key={episode.id}
      >
        <Link
          href={`/watch-anime/${episode.episodeId}`}
          className="absolute inset-0 z-10"
          prefetch={false}
        ></Link>
        <Image
          src={episode.image}
          width={400}
          height={225}
          alt="Episode thumbnail"
          className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
          style={{ aspectRatio: "400/225", objectFit: "cover" }}
        />
        <div className="p-4 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold tracking-tight">
            {episode.title}
          </h3>
          <p className="mt-auto text-sm text-muted-foreground">
            Episode {episode.episodeNumber}
          </p>
        </div>
      </div>
    ))}
  </div>
</div> */}