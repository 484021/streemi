"use client";

import Hls from "hls.js";
import { useEffect, useRef } from "react";

type VideoPlayerProps = {
  selectedStreamUrl: string;
};

export default function VideoPlayer({ selectedStreamUrl }: VideoPlayerProps) {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    const hls = new Hls({
      debug: true,
    });

    if (Hls.isSupported() && videoRef.current) {
      hls.loadSource(selectedStreamUrl || "");
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.ERROR, (err) => {
        // console.log(err);
      });
    } else {
      // console.log("load");
    }
    return () => {
      // cleanup (when component destroyed or when useEffect runs twice on StrictMode)
      hls.destroy();
    };
  }, [selectedStreamUrl]);

  return <video className="w-full" ref={videoRef} controls autoPlay />;
}
