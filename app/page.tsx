"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import CvModal from "@/components/CvModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      {cvModalOpen && <CvModal onClose={() => setCvModalOpen(false)} />}
    </>
  );
}
