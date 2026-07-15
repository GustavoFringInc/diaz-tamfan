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
import Philosophy from "@/components/sections/Philosophy";
import UsesSection from "@/components/sections/UsesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <SmoothScroll>
      <MouseSpotlight />
      <Navbar />

      <main className="pt-14">
        {/* Bab 1 — Halaman pertama buku */}
        <Hero />

        {/* Divider */}
        <div className="px-6 py-4">
          <div className="max-w-5xl mx-auto">
            <div className="editorial-rule" />
          </div>
        </div>

        {/* Bab 2 — Tentang Saya */}
        <About />

        {/* Divider */}
        <div className="px-6 py-4">
          <div className="max-w-5xl mx-auto">
            <div className="editorial-rule" />
          </div>
        </div>

        {/* Bab 3 — Featured Projects */}
        <FeaturedProjects />

        {/* Bab 4 — Reading List */}
        <ReadingList />

        {/* Bab 5 — Timeline */}
        <Timeline />

        {/* Divider */}
        <div className="px-6 py-4">
          <div className="max-w-5xl mx-auto">
            <div className="editorial-rule" />
          </div>
        </div>

        {/* Bab 6 — Philosophy */}
        <Philosophy />

        {/* Bab 7 — Uses */}
        <UsesSection />

        {/* Bab 8 — Contact / Penutup */}
        <ContactSection />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
