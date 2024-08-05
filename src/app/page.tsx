import { AboutUs } from "@/components/about-us";
import Articles from "@/components/articles";
import Header from "@/components/header";
import { HeroSlider } from "@/components/hero/slider";

export default function Home() {
  return (
    <main className="bg-foreground text-neutral-50">
      <Header />
      <HeroSlider />
      <AboutUs />
      <Articles />
    </main>
  );
}
