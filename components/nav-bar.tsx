import React from "react";

import { MountainIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";
import AnimeSearchForm from "./anime-search";

export default function NavBar() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b ">
      <nav>
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold"
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6" />
            <span className="">Streemi</span>
          </Link>
          <AnimeSearchForm />
          <div className="">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
