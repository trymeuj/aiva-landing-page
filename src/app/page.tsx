"use client";
import React, { useState, useEffect } from "react";
import TimelineIndicator from "../components/TimelineIndicator";
import HeroSection from "../components/sections/HeroSection";
import WhatAreAIInternsSection from "../components/sections/WhatAreAIInternsSection";
import MemorySection from "../components/sections/MemorySection";
import ChatDelegationSection from "../components/sections/ChatDelegationSection";
import ComparisonSection from "../components/sections/ComparisonSection";
import LogsSection from "../components/sections/LogsSection";
import FinalCTASection from "../components/sections/FinalCTASection";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground font-inter">
      {/* Fixed Timeline Line - Hidden on mobile */}
      <div className="fixed left-8 top-0 bottom-0 w-[2px] bg-primary/30 rounded-full z-10 hidden lg:block" />

      {/* Timeline Indicator - Hidden on mobile */}
      <div className="hidden lg:block">
        <TimelineIndicator activeSection={activeSection} />
      </div>

      {/* Main Content */}
      <main className="relative z-20">
        <HeroSection />
        <WhatAreAIInternsSection />
        <ChatDelegationSection />
        <LogsSection />
        <MemorySection />
        <ComparisonSection />
        <FinalCTASection />
      </main>
    </div>
  );
}
