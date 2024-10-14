import Script from "next/script";
import React from "react";

export default function AdSense() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6067991017340776"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
