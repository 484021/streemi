/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gogocdn.net",

      },
    ],
  },
};

export default nextConfig;
