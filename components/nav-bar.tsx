import React from "react";

import { Bot } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";
import AnimeSearchForm from "./anime-search";
import { LoginButton } from "./login-button";

export default async function NavBar() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b ">
      <nav>
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold"
            prefetch={false}
          >
            <div className="flex items-center gap-2">
              <Bot className="h-8 w-8" />
              <span className=" mt-1">Streemi - Beta</span>
            </div>
          </Link>
          <AnimeSearchForm />
          <div className="">
            <ModeToggle />
          </div>
          <LoginButton />
        </div>
      </nav>
    </header>
  );
}
