"use client";
import { Button } from "@/components/ui/button";
import { CONSUMET_API_URL } from "@/lib/constants";
import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

interface VideoSource {
  url: string;
  isM3U8: boolean;
  quality: string;
}

interface VideoData {
  headers: {
    Referer: string;
  };
  sources: VideoSource[];
  download: string;
}

export default function Page({ params }: { params: { id: string } }) {
  const { id: episodeId } = params;

  const url = CONSUMET_API_URL + `anime/gogoanime/watch/${episodeId}`;
  const [episodeStreams, setEpisodeStreams] = useState<VideoData>();
  const [selectedStreamUrl, setSelectedStreamUrl] = useState<string>("");
  const [quality, setQuality] = useState<string>("");
  const videoRef = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    console.log(episodeStreams);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!episodeStreams) {
          setEpisodeStreams(data);
        }
        if (!selectedStreamUrl) {
          setSelectedStreamUrl(data.sources[0].url);
          setQuality(data.sources[0].quality);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    const hls = new Hls({
      debug: true,
    });

    if (Hls.isSupported() && videoRef.current) {
      hls.loadSource(selectedStreamUrl || "");
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.ERROR, (err) => {
        console.log(err);
      });
    } else {
      console.log("load");
    }
    return () => {
      // cleanup (when component destroyed or when useEffect runs twice on StrictMode)
      hls.destroy();
    };
  }, [selectedStreamUrl, url, episodeStreams]);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="bg-background rounded-lg border shadow-sm overflow-hidden">
        <div className="aspect-video">
          <video className="w-full" ref={videoRef} controls autoPlay />
        </div>

        <h3 className="text-lg font-medium text-center mt-2">Quality</h3>
        <div className="p-4 flex gap-2 items-center justify-center">
          {episodeStreams?.sources.slice(0,4).map((stream) => (
            <Button
              key={stream.quality}
              onClick={() => {
                setSelectedStreamUrl(stream.url);
                setQuality(stream.quality);
                console.log(quality);
                console.log(selectedStreamUrl);
              }}
            >
              {stream.quality.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
