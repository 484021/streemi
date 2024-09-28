"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
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
          <Carousel className="min-w-52 max-w-3xl">
            <CarouselContent className="-ml-1">
              {results.map((result) => (
                <CarouselItem
                  key={result.id}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="">
                      <Link href={result.url}>
                        <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                          <Image
                            src={result.image}
                            alt={result.title}
                            width={200}
                            height={200}
                          />
                          <Label>{result.title}</Label>
                        </CardContent>
                      </Link>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </main>
  );
}
