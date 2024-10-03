import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Show } from "@/lib/types";
import Image from "next/image";

type VideoDescriptionProps = {
  show: Show;
  currentEpisode: number;
};

export default function VideoDescription({
  show,
  currentEpisode,
}: VideoDescriptionProps) {
  return (
    <Collapsible className="border rounded-md overflow-hidden mt-4">
      <CollapsibleTrigger asChild>
        <div className="flex items-center justify-between bg-muted px-4 py-3 cursor-pointer">
          <div className="text-sm font-medium">Info</div>
          <div className="w-5 h-5 text-muted-foreground" />
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
          <div className="text-sm text-muted-foreground">Release Date</div>
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
              <span className="bg-muted rounded-full px-2 py-1 mr-2" key={index}>
                {genre}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-1 animate-fade-in-up">
          <div className="text-sm text-muted-foreground">Subtitle/Dub</div>
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
          <div className="text-sm text-muted-foreground">Total Episodes</div>
          <div className="font-medium">{show.totalEpisodes}</div>
        </div>
     
      </CollapsibleContent>
    </Collapsible>
  );
}
