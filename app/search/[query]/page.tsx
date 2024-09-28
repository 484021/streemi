"use client";
import { CONSUMET_API_URL } from "@/lib/constants";
import {  SearchResponse, SearchResult } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationPrevious,
//   PaginationLink,
//   PaginationEllipsis,
//   PaginationNext,
// } from "@/components/ui/pagination";

export default function Page({ params }: { params: { query: string } }) {
  const searchQuery = params.query;

  const url = CONSUMET_API_URL + `anime/gogoanime/${searchQuery}`;
  const [queryResponse, setQueryResponse] = useState<SearchResponse>(
    {} as SearchResponse
  );
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setQueryResponse(data);
        setSearchResults(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url, queryResponse]);

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Search Results</h1>
        <div className="relative"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchResults.map((result) => (
          <Link href={`/anime/${result.id}`} key={result.id}>
            <div className="bg-card rounded-md overflow-hidden">
              <Image
                src={result.image}
                alt="Anime Image"
                width={400}
                height={225}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{result.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2"></p>
              </div>
            </div>
          </Link>
        ))}

        {/* <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination> */}
      </div>
    </div>
  );
}
