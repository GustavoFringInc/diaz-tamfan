"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import MouseSpotlight from "@/components/motion/MouseSpotlight";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ReadingList from "@/components/sections/ReadingList";
import Timeline from "@/components/sections/Timeline";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <SmoothScroll>
      <MouseSpotlight />
      <Navbar />

      <main className="pt-14">
        <Hero />

        <div className="px-6 py-4">
          <div className="max-w-5xl mx-auto"><div className="editorial-rule" /></div>
        </div>

        <About />

        <FeaturedProjects />

        <ReadingList />

        <Timeline />

        <ContactSection />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
