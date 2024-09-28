"use client";
import { Button } from "@/components/ui/button";
import { CONSUMET_API_URL } from "@/lib/constants";
import { EpisodeSourceList } from "@/lib/types";
import React, { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { id: episodeId } = params;

  const url = CONSUMET_API_URL + `anime/gogoanime/servers/${episodeId}`;
  const [episodeStreams, setEpisodeStreams] = useState<EpisodeSourceList>();
  const [selectedStreamUrl, setSelectedStreamUrl] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setEpisodeStreams(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url, episodeStreams]);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
    <div className="bg-background rounded-lg border shadow-sm overflow-hidden">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={selectedStreamUrl || episodeStreams?.[0]?.url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4 grid gap-4">
        <h3 className="text-lg font-medium">Choose Stream Location</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            episodeStreams?.map((stream) => (
              <Button
                key={stream.name}
                variant="outline"
                onClick={() => setSelectedStreamUrl(stream.url)}
              >
                {stream.name}
              </Button>
            ))
          }
        </div>
      </div>
    </div>
  </div>
  );
}
