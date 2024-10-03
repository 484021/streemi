"use client";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Show } from "@/lib/types";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type VideoDescriptionProps = {
  show: Show;
  currentEpisode: number;
};

export default function VideoDescription({
  show,
  currentEpisode,
}: VideoDescriptionProps) {
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
                <span className="font-semibold">Show Info</span>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 grid gap-4 animate-fade-in">
              <div className="grid gap-1 animate-fade-in-up">
                <div className="text-sm text-muted-foreground">
                  {show.title} - {currentEpisode}
                </div>
                <div className="font-medium"></div>
              </div>

              <div className="grid gap-1 animate-fade-in-up">
                <div className="text-sm text-muted-foreground">Image</div>
                <Image
                  src={show.image}
                  alt="Thumbnail"
                  width={400}
                  height={225}
                  className="rounded-md object-cover aspect-video"
                />
              </div>
              <div className="grid gap-1 animate-fade-in-up">
                <div className="text-sm text-muted-foreground">
                  Release Date
                </div>
                <div className="font-medium">{show.releaseDate}</div>
              </div>
              <div className="grid gap-1 animate-fade-in-up">
                <div className="text-sm text-muted-foreground">Description</div>
                <div className="text-sm">{show.description}</div>
              </div>
              <div className="grid gap-1 animate-fade-in-up">
                <div className="text-sm text-muted-foreground">Genres</div>
                <div className="text-sm">
                  {show.genres.map((genre, index) => (
                    <span
                      className="bg-muted rounded-full px-2 py-1 mr-2"
                      key={index}
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-1 animate-fade-in-up">
                <div className="text-sm text-muted-foreground">
                  Subtitle/Dub
                </div>
                <div className="font-medium">{show.subOrDub}</div>
              </div>
              <div className="grid gap-1 animate-fade-in-up">
                <div className="text-sm text-muted-foreground">Type</div>
                <div className="font-medium">{show.type}</div>
              </div>
              <div className="grid gap-1 animate-fade-in-up">
                <div className="text-sm text-muted-foreground">Status</div>
                <div className="font-medium text-green-500">{show.status}</div>
              </div>
              <div className="grid gap-1 animate-fade-in-up">
                <div className="text-sm text-muted-foreground">Other Names</div>
                <div className="font-medium">
                  {show.otherName ? show.otherName : "N/A"}
                </div>
              </div>
              <div className="grid gap-1 animate-fade-in-up">
                <div className="text-sm text-muted-foreground">
                  Total Episodes
                </div>
                <div className="font-medium">{show.totalEpisodes}</div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}
