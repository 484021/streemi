"use server";

import { CONSUMET_API_URL } from "@/lib/constants";

export async function searchAnime(searchQuery: string) {
  const searchUrl = CONSUMET_API_URL + `anime/gogoanime/${searchQuery}`;
  try {
    const response = await fetch(searchUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getAnimeById(animeId: string) {
  const animeUrl = CONSUMET_API_URL + `anime/gogoanime/info/${animeId}`;

  try {
    const response = await fetch(animeUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getEpisodeStreams(episodeId: string) {
  const episodeStreamInfoUrl =
    CONSUMET_API_URL + `anime/gogoanime/watch/${episodeId}`;
  try {
    const response = await fetch(episodeStreamInfoUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
