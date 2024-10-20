import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function InstagramButton() {
  return (
    <Link
      href="https://www.instagram.com/streemi.app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        className="
          
          w-full sm:w-auto 
          bg-gradient-to-r from-purple-600 to-pink-500 
          hover:from-purple-700 hover:to-pink-600 
          text-white font-medium 
          py-2 px-4 
          rounded-full 
          transition-all duration-300 
          transform hover:scale-105 
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
          shadow-lg hover:shadow-xl
          mt-4
        "
      >
        <Instagram className="w-5 h-5 mr-2" />
        <span className="hidden sm:inline">Follow Our Anime Community</span>
        <span className="sm:hidden">Follow Us</span>
      </Button>
    </Link>
  );
}
