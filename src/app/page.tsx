import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PostHero from "@/components/PostHero";
import PostHeroGrid from "@/components/PostHeroGrid";
import Why from "@/components/Why";
import Timetable from "@/components/Timetable";
import Tour from "@/components/Tour";
import Coaches from "@/components/Coaches";
import Pricing from "@/components/Pricing";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Improv from "@/components/Improv";
import Directions from "@/components/Directions";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <a href="#main" className="skip">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <PostHero />
        <PostHeroGrid />
        <Why />
        <Improv />
        <Tour />
        <Coaches />
        <Timetable />
        <Pricing />
        <Directions />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
