"use client"
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

export default function AnimeSearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search/${searchQuery}`);
  };
  return (
    <form className="w-full max-w-md mx-auto" onSubmit={handleSearch}>
      <div className="relative">
        <Input
          type="search"
          placeholder="Search for your favorite anime..."
          className="h-12 w-full rounded-md bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-primary"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white"

        >
          <SearchIcon className="h-6 w-6" />
        </Button>
      </div>
    </form>
  );
}
