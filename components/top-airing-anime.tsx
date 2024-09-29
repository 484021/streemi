"use client";
import { CONSUMET_API_URL } from "@/lib/constants";
import { Data, EpisodeResult } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

export default function TopAiringAnime() {
  const url = CONSUMET_API_URL + "anime/gogoanime/top-airing";

  const [data, setData] = useState<Data[]>([]);
  const [results, setResults] = useState<EpisodeResult[]>([]);

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
  }, [url, data]);
  return (
    <div className="flex flex-col items-center justify-center mx-auto mb-7">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-7">
        Most Popular
      </h2>
      <div className="pt-2 flex flex-wrap w-full h-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 ">
          {results.map((result) => (
            <Link href={`/anime/${result.id}`} key={result.id}>
              <Card className="w-[140px] m-2 flex flex-col items-center justify-center hover:scale-110 transition-all dark:shadow-purple-950">
                <CardHeader className="text-center">
                  {/* <CardDescription className="text-lg">{index + 1}</CardDescription> */}
                  <CardTitle>{result.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={result.image}
                    alt={result.title}
                    width={300}
                    height={350}
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
