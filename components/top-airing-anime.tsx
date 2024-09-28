"use client";
import { CONSUMET_API_URL } from "@/lib/constants";
import { Data, EpisodeResult } from "@/lib/types";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  //   CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
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
    <div className="flex flex-col items-center justify-center mx-auto">
      <h1 className="text-2xl mt-4">Top Airing Anime</h1>
      <div className="pt-2 flex flex-wrap w-full h-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 ">
          {results.map((result) => (
            <Card
              className="w-[140px] m-2 flex flex-col items-center justify-center "
              key={result.id}
            >
              <CardHeader className="text-center">
                {/* <CardDescription className="text-lg">{index + 1}</CardDescription> */}
                <CardTitle>{result.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={result.image}
                  alt={result.title}
                  width={250}
                  height={350}
                />
              </CardContent>
              <CardFooter>
                <Link href={`/anime/${result.id}`}>
                  <Button>Watch Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
