import { searchAnime } from "@/actions/actions";
import { SearchResult } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { query: string } }) {
  const searchQuery = params.query;

  const searchResults: SearchResult[] = await searchAnime(searchQuery);

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Search Results</h1>
        <div className="relative"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchResults.map((result: SearchResult) => (
          <Link href={`/sp-anime/${result.id}`} key={result.id}>
            <div className="bg-card rounded-md overflow-hidden">
              <Image
                src={result.image}
                alt="Anime Image"
                width={400}
                height={225}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{result.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2"></p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
