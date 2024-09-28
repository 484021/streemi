import TopAiringAnime from "@/components/top-airing-anime";
import HeroSlider from "@/components/v0 components/hero-slider";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-wrap px-10">
      <HeroSlider />
      <TopAiringAnime />
    </main>
  );
}
