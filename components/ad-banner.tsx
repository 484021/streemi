import Image from "next/image";
import Link from "next/link";
import React from "react";
import adBanner from "@/public/Blue Gradient Modern Business Investments LinkedIn Banner.png";

export default function AdBanner() {
  return (
    <Link
      href="https://hop.clickbank.net/?affiliate=prodoits&vendor=socialsrep&pid=joblandingpage&ifso=instagramchatassistant"
      target="blank"
    >
      <Image src={adBanner} alt="Make Money Online" className="my-4" />
    </Link>
  );
}
