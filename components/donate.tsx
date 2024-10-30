"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DonateButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="https://buymeacoffee.com/streemi" target="_blank">
      <Button
        size="lg"
        className={`
          relative overflow-hidden bg-gradient-to-r from-pink-500 to-rose-500 
          hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-6 sm:px-8 
          rounded-full shadow-lg transform transition-all duration-500 ease-in-out 
          hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50
          ${isHovered ? "animate-pulse" : ""}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10 flex items-center justify-center">
          <Heart className={`mr-2 ${isHovered ? "animate-beat" : ""}`} />
          <span className="text-sm sm:text-lg">
            <span className="hidden sm:inline">Donate </span>
            <span className="sm:hidden">Donate</span>
            <span className="hidden sm:inline">Now</span>
          </span>
        </span>
        <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
      </Button>
    </Link>
  );
}
