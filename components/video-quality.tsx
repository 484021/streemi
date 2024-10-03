"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDownIcon } from "lucide-react";
import { VideoData, VideoSource } from "@/lib/types";

type VideoQualityProps = {
  currentEpisodeStreams: VideoData;
  setCurrentStreamUrl: (url: string) => void;
};

export default function VideoQuality({
  currentEpisodeStreams,
  setCurrentStreamUrl,
}: VideoQualityProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full pt-4">
      <div className="container">
        <div className="grid gap-6 md:gap-8">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full bg-background rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <div className="flex items-center gap-2">
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    isOpen ? "-rotate-180" : ""
                  }`}
                />
                <span className="font-semibold">Video Quality Options</span>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
              {currentEpisodeStreams.sources.map(
                (source: VideoSource, index: number) => (
                  <Card className="p-4 flex flex-col gap-4" key={index}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">
                        {source.quality.charAt(0).toUpperCase() +
                          source.quality.slice(1)}
                      </h3>
                      <Button
                        size="sm"
                        onClick={() => {
                          setCurrentStreamUrl(source.url);
                        }}
                      >
                        Select
                      </Button>
                    </div>
                  </Card>
                )
              )}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}
