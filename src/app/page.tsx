import { AboutUs } from "@/components/about-us";
import Articles from "@/components/articles";
import { HeroSlider } from "@/components/hero/slider";
import MainLayout from "@/components/layouts/main";

export default function Home() {
  return (
    <MainLayout>
      <HeroSlider />
      <AboutUs />
      <Articles />
    </MainLayout>
  );
}
