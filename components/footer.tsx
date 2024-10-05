import Link from "next/link";
import React from "react";
import InstagramButton from "./instagram-button";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between">
      <footer className="bg-muted py-6 md:py-8 mt-60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-sm text-muted-foreground">
              <p>
                Streemi links to third-party content and does not host any
                videos. We are not responsible for the availability or legality
                of external content.
              </p>
            </div>
            <div className="grid gap-2 md:justify-self-center">
              {/* <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link> */}
              <InstagramButton />
            </div>
            <div className="grid gap-2 md:justify-self-end">
              <Link
                href="https://www.instagram.com/streemi.app"
                className="hover:underline"
                prefetch={false}
              >
                Contact Us
              </Link>
              <div className="text-xs text-muted-foreground">
                &copy; 2024 Streemi. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
