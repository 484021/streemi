"use client";
import { Input } from "@/components/ui/input";
import { use, useEffect, useState } from "react";

type EpisodeResult = {
  id: string;
  episodeId: string;
  episodeNumber: number;
  title: string;
  image: string;
  url: string;
};

type Data = {
  currentPage: number;
  hasNextPage: boolean;
  results: EpisodeResult[];
};

export default function Home() {
  const url = "https://my-consument.vercel.app/anime/gogoanime/recent-episodes";

  const [data, setData] = useState<Data[]>({});
  const [results, setResults] = useState<EpisodeResult[]>([]);

  //fetch recentEpisodes
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setResults(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <main className="flex flex-col items-center justify-center p-10">
      streemi
      <Input className="w-50" />
      <div>
        Recent Episodes
        <div>
          {results.map((result) => (
            <div key={result.id}>
              <img src={result.image} alt={result.title} />
              <p>{result.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
