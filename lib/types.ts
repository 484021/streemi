export type EpisodeResult = {
    id: string;
    episodeId: string;
    episodeNumber: number;
    title: string;
    image: string;
    url: string;
  };
  
  export type Data = {
    currentPage: number;
    hasNextPage: boolean;
    results: EpisodeResult[];
  };
  
  export type Episode = {
    id: string;
    number: number;
    url: string;
  };
  
  export type Show = {
    id: string;
    title: string;
    url: string;
    image: string;
    releaseDate: string | null;
    description: string | null;
    genres: string[];
    subOrDub: "sub" | "dub";
    type: string | null;
    status: "Ongoing" | "Completed" | "Hiatus"; // Adjust based on possible values
    otherName: string | null;
    totalEpisodes: number;
    episodes: Episode[];
  };