"use client";
import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { CONSUMET_API_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import process from "process";
import { useEffect, useState } from "react";

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
  const url = CONSUMET_API_URL + "anime/gogoanime/recent-episodes";

  console.log(process.env.CONSUMET_API_URL);

  const [data, setData] = useState<Data[]>([]);
  const [results, setResults] = useState<EpisodeResult[]>([]);

  //fetch recentEpisodes

  useEffect(() => {
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
    fetchData();
  }, [url]);

  console.log(data);

  return (
    <main className="flex flex-col items-center justify-center p-10">
      streemi
      <Input className="w-50" />
      <div>
        Recent Episodes
        <div className="">
          {results.map((result) => (
            <Card key={result.id}>
              <CardContent>
                <div className="flex flex-row">
                  <Image
                    src={result.image}
                    alt={result.title}
                    width={100}
                    height={100}
                  />
                  <div className="flex flex-col">
                    <Link href={result.url}>{result.title}</Link>
                    <p>Episode {result.episodeNumber}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
