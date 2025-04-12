"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const totalSlides = 5;

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Example images/GIFs - replace with actual assets
  const slides = [
    { id: 1, src: '/carousel-1.jpg', alt: 'Aiva in action 1' },
    { id: 2, src: '/carousel-2.jpg', alt: 'Aiva in action 2' },
    { id: 3, src: '/carousel-3.jpg', alt: 'Aiva in action 3' },
    { id: 4, src: '/carousel-4.jpg', alt: 'Aiva in action 4' },
    { id: 5, src: '/carousel-5.jpg', alt: 'Aiva in action 5' },
  ];

  return (
    <section className="w-full pt-section-mobile md:pt-section pb-10 bg-background">
      <div className="max-w-content mx-auto px-container text-center">
        {/* Hero Text */}
        <h1 className="text-4xl md:text-5xl lg:text-hero font-bold mb-8 leading-tight tracking-tight text-foreground">
          We are to you what Jarvis is to Stark
        </h1>
        
        <p className="text-lg text-tertiary max-w-2xl mx-auto mb-12">
          An agent that is truly autonomous. Automate tasks across your work and life.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
          <Link href="/book" className="bg-buttonBg text-buttonText px-button-padding-x py-button-padding-y rounded-button primary-button font-medium">
            Book
          </Link>
          <Link href="/demo" className="bg-secondaryButtonBg text-secondaryButtonText border border-secondaryButtonBorder px-button-padding-x py-button-padding-y rounded-button secondary-button font-medium">
            Watch Demo
          </Link>
        </div>
        
        {/* Carousel */}
        <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[400px] overflow-hidden">
          <div className="flex justify-center items-center h-full">
            {slides.map((slide, index) => {
              // Calculate position relative to active slide
              const position = (index - activeIndex + totalSlides) % totalSlides;
              
              // Determine styling based on position from center
              let size = "w-1/3 h-1/3 opacity-40";
              let zIndex = 0;
              
              if (position === 0) {
                size = "w-3/4 h-3/4 opacity-100";
                zIndex = 30;
              } else if (position === 1 || position === totalSlides - 1) {
                size = "w-1/2 h-1/2 opacity-70";
                zIndex = 20;
              } else {
                zIndex = 10;
              }
              
              // Calculate horizontal position
              let translateX = 0;
              if (position === 0) {
                translateX = 0;
              } else if (position === 1) {
                translateX = 50;
              } else if (position === totalSlides - 1) {
                translateX = -50;
              } else if (position < totalSlides / 2) {
                translateX = 75;
              } else {
                translateX = -75;
              }
              
              return (
                <div
                  key={slide.id}
                  className={`absolute rounded-card shadow-card cursor-pointer transition-all duration-500 ${size}`}
                  style={{
                    transform: `translateX(${translateX}%)`,
                    zIndex: zIndex,
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="relative w-full h-full rounded-card overflow-hidden">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority={position === 0}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-foreground w-4' : 'bg-tertiary opacity-50'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 