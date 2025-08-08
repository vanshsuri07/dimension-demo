import Header from "@/components/Header";
import StarCanvas from "@/components/AnimatedPage";
import Hero from "@/components/HeroSection";
import AnimatedPage2 from "@/components/AnimatedPage2";

import Footer from "@/components/Footer";

export default function Home() {
  return (
   <div className="relative overflow-hidden">
      <StarCanvas />
      <Header />
      <Hero />
      <AnimatedPage2 />
      <Footer />
    </div>
  );
}
