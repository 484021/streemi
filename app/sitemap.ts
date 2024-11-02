import { allAnimeIds } from "@/lib/constants";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const animes = allAnimeIds;
  const animePages = animes.map((anime) => `/sp-anime/${anime}`);
  const animePages2 = animes.map((anime) => `/anime/${anime}`);
  const routes = animePages.map((route) => ({
    url: `${process.env.BASE_URL}${route}`,
    lastModified: new Date(),
  }));
  const routes2 = animePages2.map((route) => ({
    url: `${process.env.BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${process.env.BASE_URL}/`,
      lastModified: new Date(),
    },
    ...routes,
    ...routes2,
  ];
}
