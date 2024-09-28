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
  