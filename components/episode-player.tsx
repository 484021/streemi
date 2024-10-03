"use client";

import { VideoData } from "@/lib/types";
import { Button } from "./ui/button";
import VideoPlayer from "./video-player";
import { useState } from "react";

export default function EpisodePlayer({
  episodeStreams,
}: {
  episodeStreams: VideoData;
}) {
  const defaultStream = episodeStreams.sources[0];
  const [selectedStreamUrl, setSelectedStreamUrl] = useState(defaultStream.url);
  const [quality, setQuality] = useState(defaultStream.quality);
  return (
    <>
      <div className="aspect-video">
        <VideoPlayer selectedStreamUrl={selectedStreamUrl} />
      </div>

      <h3 className="text-lg font-medium text-center mt-2">Quality</h3>
      <div className="p-4 flex gap-2 items-center justify-center">
        {episodeStreams?.sources.slice(0, 4).map((stream) => (
          <Button
            className={quality === stream.quality ? "bg-muted" : ""}
            key={stream.quality}
            onClick={() => {
              setSelectedStreamUrl(stream.url);
              setQuality(stream.quality);

            }}
          >
            {stream.quality.toUpperCase()}
          </Button>
        ))}
      </div>
    </>
  );
}
