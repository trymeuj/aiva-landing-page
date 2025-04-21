"use client";

import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';

const DemoPage = () => {
  const serviceIcons = [
    { name: 'WhatsApp', path: '/WhatsApp-logo.svg' },
    { name: 'Gmail', path: '/Gmail_icon.svg' },
    { name: 'Calendar', path: '/Google_Calendar_icon.svg' },
    { name: 'Meet', path: '/Google_Meet_icon.svg' },
  ];

  const demos = [
    {
      description: "Watch how AIVA handles your Mail and WhatsApp automatically",
      videoSrc: "/demo1.mp4"
    },
    {
      description: "See AIVA in action during your meetings",
      videoSrc: "/demo2.mp4"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-16">
        {/* Service Icons */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 py-6 sm:py-8 px-4 bg-[#F6F6F6]">
          {serviceIcons.map((icon, index) => (
            <div key={index} className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src={icon.path}
                alt={icon.name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>

        {demos.map((demo, index) => (
          <section 
            key={index} 
            className={`min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 
              ${index > 0 ? 'mt-8 sm:mt-12 md:mt-16' : 'mt-4 sm:mt-6'}`}
          >
            <div className="max-w-4xl w-full">
              <p className="text-lg sm:text-xl text-center mb-4 sm:mb-6 md:mb-8 text-gray-600 px-4">
                {demo.description}
              </p>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  controls
                  src={demo.videoSrc}
                  autoPlay={index === 0}
                  muted={index === 0}
                  playsInline
                  onDoubleClick={(e) => {
                    if (e.currentTarget.requestFullscreen) {
                      e.currentTarget.requestFullscreen();
                    }
                  }}
                />
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default DemoPage; 