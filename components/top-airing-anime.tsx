"use client";
import { CONSUMET_API_URL } from "@/lib/constants";
import { Data, EpisodeResult } from "@/lib/types";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

export default function TopAiringAnime() {
  const url = CONSUMET_API_URL + "anime/gogoanime/top-airing";

  console.log(process.env.CONSUMET_API_URL);

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
  }, [url]);
  return (
    <div className="pt-2 flex flex-wrap">
      {results.map((result, index) => (
        <Card key={index} className="m-2 w-[200px]">
          <CardHeader>
            <CardTitle>{result.title}</CardTitle>
            <CardDescription>Episode {result.episodeNumber}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={result.image}
              alt="Hero Slide"
              className="h-full w-full object-cover"
              width={200}
              height={300}
            />
          </CardContent>
          <CardFooter>
            <Button>Watch Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
