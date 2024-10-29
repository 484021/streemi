import { AnimeFanSignup } from "@/components/anime-fan-signup";
import RecentEpisodes from "@/components/recent-episodes";
import TopAiringAnime from "@/components/top-airing-anime";
import HeroSlider from "@/components/v0 components/hero-slider";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-wrap">
      <HeroSlider />
      <div className="-mb-10 mt-2 mx-4 xl:-mb-20">
        <AnimeFanSignup />
      </div>
      <TopAiringAnime />
      <RecentEpisodes />
    </main>
  );
}
