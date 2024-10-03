"use server";

export async function searchAnime(searchQuery: string) {
  const searchUrl = `${process.env.CONSUMET_API_URL}/anime/gogoanime/${searchQuery}`;
  try {
    const response = await fetch(searchUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getAnimeById(animeId: string) {
  const animeUrl = `${process.env.CONSUMET_API_URL}/anime/gogoanime/info/${animeId}`;

  try {
    const response = await fetch(animeUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getEpisodeStreams(episodeId: string) {
  const episodeStreamInfoUrl = `${process.env.CONSUMET_API_URL}/anime/gogoanime/watch/${episodeId}`;
  try {
    const response = await fetch(episodeStreamInfoUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getTopAiringAnime() {
  const url = `${process.env.CONSUMET_API_URL}/anime/gogoanime/top-airing`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getRecentEpisodes() {
  const url = `${process.env.CONSUMET_API_URL}/anime/gogoanime/recent-episodes`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// export async function getAnimeByAdvancedSearch({ query }: { query: string }) {
//   const url = CONSUMET_API_URL + `meta/anilist/advanced-search`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     return data.results;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// export async function getAiringAnimeBySchedule() {
//   const url = "https://api.consumet.org/meta/anilist/airing-schedule";

//   // Get today's date and calculate the date 7 days from now
//   const today = new Date().toISOString().split("T")[0];
//   const nextWeek = new Date(new Date().setDate(new Date().getDate() + 7))
//     .toISOString()
//     .split("T")[0];

//   try {
//     const response = await fetch(
//       `${url}?weekStart=${today}&weekEnd=${nextWeek}&page=1&perPage=20`
//     );
//     const data = await response.json();
//     console.log(data);
//     return data.results;
//   } catch (err) {
//     console.error("Error fetching data:", err);
//   }
// }
