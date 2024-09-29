"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { MountainIcon, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";
import { ModeToggle } from "./ui/mode-toggle";
import AnimeSearchForm from "./anime-search";

export default function NavBar() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b ">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="">Streemi</span>
        </Link>
        <AnimeSearchForm />
        <ModeToggle />
        {/* <nav className="hidden items-center gap-6 font-medium md:flex">
          <Link
            href="#"
            className="transition-colors hover:text-primary hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="transition-colors hover:text-primary hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Anime
          </Link>
        </nav> */}
        {/* <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="md:hidden">
            <div className="grid gap-4 p-4">
              <Link
                href="#"
                className="transition-colors hover:text-primary hover:underline hover:underline-offset-4"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="transition-colors hover:text-primary hover:underline hover:underline-offset-4"
                prefetch={false}
              >
                Anime
              </Link>
            </div>
          </SheetContent>
        </Sheet> */}
      </div>
    </header>
  );
}
