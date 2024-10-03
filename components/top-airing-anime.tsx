import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { getTopAiringAnime } from "@/actions/actions";
import { Button } from "./ui/button";

type Anime = {
  id: string;
  title: string;
  image: string;
  url: string;
  genres: string[];
  episodeId: string;
  episodeNumber: number;
};

export default async function TopAiringAnime() {
  const topAiringAnime = await getTopAiringAnime();
  return (
    <section className=" py-12 sm:py-16 md:py-20 lg:py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Popular & Trending Anime
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {topAiringAnime.map((anime: Anime) => (
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
                  {anime.genres.map((genre: string) => genre).join(", ")}
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
