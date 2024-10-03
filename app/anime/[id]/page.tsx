import { getAnimeById } from "@/actions/actions";
// import EpisodesSection from "@/components/episodes-section";
import { Show } from "@/lib/types";
import Image from "next/image";

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
      {/* <EpisodesSection show={show} /> */}
    </div>
  );
}
