import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-muted py-6 md:py-8 mt-7 bottom-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-sm text-muted-foreground">
            <p>
              Streemi is not a direct streaming platform. We simply provide
              links and information to help you find and access anime content on
              3rd party services.
            </p>
          </div>
          <div className="grid gap-2 md:justify-self-center">
            {/* <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link> */}
          </div>
          <div className="grid gap-2 md:justify-self-end">
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact Us
            </Link>
            <div className="text-xs text-muted-foreground">
              &copy; 2024 Streemi. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
