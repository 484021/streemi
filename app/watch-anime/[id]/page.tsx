"use client";
import { Button } from "@/components/ui/button";
import { CONSUMET_API_URL } from "@/lib/constants";
import { EpisodeSourceList } from "@/lib/types";
import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

export default function Page({ params }: { params: { id: string } }) {
  const { id: episodeId } = params;

  const url = CONSUMET_API_URL + `anime/gogoanime/servers/${episodeId}`;
  const [episodeStreams, setEpisodeStreams] = useState<EpisodeSourceList>();
  const [selectedStreamUrl, setSelectedStreamUrl] = useState<string>("");
  const videoRef = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setEpisodeStreams(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    const hls = new Hls({
      debug: true,
    });

    if (Hls.isSupported() && videoRef.current) {
      hls.loadSource(
        "https://ed.netmagcdn.com:2228/hls-playback/fbb29d5d0bc81d66138fa9d978a30bf7a36af8b507380add5975366485836f3876935c90f0f4206f469a29b540cd4fb7ae227e852897c3f9643efd4377c46f9d4743a9164fe6b138067036eaa920786fce1d1175736a73d4a2ca22cc6abbd27d3e10b4f94599b71f524e09074a70fcc5bd1a652620ca22e05dd7e931f47b9ff2a26df0e2799e9975298fb9585352f013/master.m3u8"
      );
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
  }, [url, episodeStreams, selectedStreamUrl]);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="bg-background rounded-lg border shadow-sm overflow-hidden">
        <video
          ref={videoRef}
          controls
          autoPlay
          style={{ width: "250px", borderRadius: "10px" }}
        />
        {/* <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={selectedStreamUrl || episodeStreams?.[0]?.url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div> */}
        <div className="p-4 grid gap-4">
          <h3 className="text-lg font-medium">Choose Stream Location</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {episodeStreams?.map((stream) => (
              <Button
                key={stream.name}
                variant="outline"
                onClick={() => setSelectedStreamUrl(stream.url)}
              >
                {stream.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
