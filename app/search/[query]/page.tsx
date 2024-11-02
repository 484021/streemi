"use client";
import { useEffect, useState } from "react";
import { searchAnime, searchAnimeByGenre } from "@/actions/actions"; // Import both actions
import { SearchResult } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import { genres } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export const runtime = "edge";

export default function Page({ params }: { params: { query: string } }) {
  const searchQuery = params.query;
  const [selectedGenre, setSelectedGenre] = useState<string>(""); // New state for selected genre
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  // Function to fetch anime results based on search query and page
  const fetchAnimes = async (query: string, page: number) => {
    setLoading(true);
    try {
      const results = await searchAnime(query, page);
      if (results) {
        setSearchResults(results.results);
        setHasNextPage(results.hasNextPage);
        setLoading(false);
      } else {
        setSearchResults([]);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching anime results:", error);
      setSearchResults([]);
      setLoading(false);
    }
  };

  // Function to fetch anime results based on genre and page
  const fetchAnimesByGenre = async (genre: string, page: number) => {
    setLoading(true);
    try {
      const results = await searchAnimeByGenre(genre, page);
      if (results) {
        setSearchResults(results.results);
        setHasNextPage(results.hasNextPage);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching anime by genre:", error);
      setSearchResults([]);
    }
    setLoading(false);
  };

  // useEffect to fetch anime based on searchQuery or selectedGenre and page
  useEffect(() => {
    if (selectedGenre) {
      // Fetch by genre if a genre is selected
      fetchAnimesByGenre(selectedGenre, page);
    } else {
      // Otherwise, fetch by search query
      fetchAnimes(searchQuery, page);
    }
  }, [searchQuery, selectedGenre, page]);

  // Function to handle page change
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Function to handle genre selection
  const handleGenreChange = (genreId: string) => {
    setSelectedGenre(genreId);
    setPage(1); // Reset page to 1 when genre is changed
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Search Results</h1>

        {/* Genre selection dropdown */}
        <div className="flex items-center gap-4">
          <Label htmlFor="genre" className="text-lg font-semibold">
            Select Genre:
          </Label>
          <Select value={selectedGenre || ""} onValueChange={handleGenreChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {genres.map((genre) => (
                  <SelectItem key={genre.id} value={genre.id}>
                    {genre.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Loading state */}
      {loading ? (
        <Loading />
      ) : (
        <>
          {searchResults && searchResults.length > 0 ? ( // Add check for searchResults being defined
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {searchResults.map((anime) => (
                <Link href={`/anime/${anime.id}`} key={anime.id}>
                  <Card className="w-auto h-full hover:scale-105 transition">
                    <Image
                      src={anime.image}
                      width={300}
                      height={400}
                      alt="Anime Thumbnail"
                      className="rounded-t-lg"
                      style={{ aspectRatio: "300/400", objectFit: "cover" }}
                    />
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">{anime.title}</h3>
                      <p className="text-sm text-[#666] mb-4">
                        {anime.releaseDate}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <h3>No results found.</h3> // Fallback message
          )}
        </>
      )}

      {/* Pagination */}
      <div className="flex justify-between mt-8">
        <Button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => handlePageChange(page + 1)}
          disabled={!hasNextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
