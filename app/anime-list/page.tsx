"use client";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

// Types for Anime
interface Anime {
  id: number;
  title: string;
  image: string;
  description: string;
  genres: string[];
}

// Props for FilterIcon (if needed)
interface FilterIconProps extends React.SVGProps<SVGSVGElement> {}

// Main component
export default function Component() {
  // State for search term
  const [searchTerm, setSearchTerm] = useState<string>("");

  // State for selected genres
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  // List of animes (can also be extracted to a separate file)
  const animes: Anime[] = [
    {
      id: 1,
      title: "Demon Slayer: Kimetsu no Yaiba",
      image: "/placeholder.svg",
      description:
        "A young boy becomes a demon slayer after his family is murdered and his sister is turned into a demon.",
      genres: ["Action", "Fantasy", "Drama"],
    },
    {
      id: 2,
      title: "Attack on Titan",
      image: "/placeholder.svg",
      description:
        "Humanity lives in cities surrounded by enormous walls due to the threat of the gigantic man-eating Titans that roam the land outside.",
      genres: ["Action", "Fantasy", "Drama"],
    },
    {
      id: 3,
      title: "Spy x Family",
      image: "/placeholder.svg",
      description:
        "A spy, an assassin, and a telepath must pose as a family to complete a high-stakes mission.",
      genres: ["Comedy", "Action", "Slice of Life"],
    },
    {
      id: 4,
      title: "Jujutsu Kaisen",
      image: "/placeholder.svg",
      description:
        "A boy swallows a cursed object and has a cursed spirit stuck inside his body, forcing him to join a secret organization of Jujutsu Sorcerers.",
      genres: ["Action", "Fantasy", "Supernatural"],
    },
    {
      id: 5,
      title: "My Hero Academia",
      image: "/placeholder.svg",
      description:
        "In a world where people develop superpowers, a young boy dreams of becoming a superhero despite not having a quirk.",
      genres: ["Action", "Superhero", "Comedy"],
    },
    {
      id: 6,
      title: "Chainsaw Man",
      image: "/placeholder.svg",
      description:
        "A young man makes a deal with the devil to become a mercenary who hunts down dangerous devils.",
      genres: ["Action", "Supernatural", "Horror"],
    },
  ];

  // Filtered animes based on search term and selected genres
  const filteredAnimes = useMemo(() => {
    return animes.filter((anime) => {
      const matchesSearch = anime.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesGenres =
        selectedGenres.length === 0 ||
        anime.genres.some((genre) => selectedGenres.includes(genre));
      return matchesSearch && matchesGenres;
    });
  }, [searchTerm, selectedGenres]);

  // Event handler for search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Event handler for genre selection
  const handleGenreSelect = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  // State for selected anime in the modal
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);

  // Event handler to open modal with selected anime
  const handleAnimeClick = (anime: Anime) => {
    setSelectedAnime(anime);
  };

  // Close modal
  const closeModal = () => {
    setSelectedAnime(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Anime List</h1>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search anime..."
            value={searchTerm}
            onChange={handleSearch}
            className="bg-muted text-muted-foreground"
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <FilterIcon className="w-5 h-5 mr-2" />
                Filters
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-4 w-[300px]">
              <div className="grid gap-2">
                <div className="font-semibold">Genres</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Action",
                    "Fantasy",
                    "Drama",
                    "Comedy",
                    "Supernatural",
                    "Superhero",
                    "Horror",
                    "Slice of Life",
                  ].map((genre) => (
                    <Label
                      key={genre}
                      className="flex items-center gap-2 font-normal"
                    >
                      <Checkbox
                        checked={selectedGenres.includes(genre)}
                        onCheckedChange={() => handleGenreSelect(genre)}
                      />
                      {genre}
                    </Label>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAnimes.map((anime) => (
          <div
            key={anime.id}
            className="bg-background rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleAnimeClick(anime)}
          >
            <Image
              src="/placeholder.svg"
              alt={anime.title}
              width={400}
              height={500}
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "400/500", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{anime.title}</h3>
              <p className="text-muted-foreground line-clamp-3">
                {anime.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedAnime && (
        <Dialog open onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/placeholder.svg"
                  alt={selectedAnime.title}
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-lg object-cover"
                  style={{ aspectRatio: "600/800", objectFit: "cover" }}
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">{selectedAnime.title}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedAnime.genres.map((genre) => (
                      <span
                        key={genre}
                        className="bg-muted px-2 py-1 rounded-md text-muted-foreground text-sm"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground">
                    {selectedAnime.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Additional Details</h3>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl eget ultricies tincidunt, nisl nisl aliquam
                    nisl, eget aliquam nisl nisl eget nisl.
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

// FilterIcon component with type definitions
function FilterIcon(props: FilterIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
