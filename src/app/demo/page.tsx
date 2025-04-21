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
      <main>
        {/* Service Icons */}
        <div className="flex justify-center items-center gap-8 py-8 bg-[#F6F6F6]">
          {serviceIcons.map((icon, index) => (
            <div key={index} className="relative w-12 h-12">
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
          <section key={index} className={`h-screen w-full flex flex-col items-center justify-center px-4 ${index > 0 ? 'mt-16' : ''}`}>
            <div className="max-w-4xl w-full">
              <p className="text-xl text-center mb-8 text-gray-600">{demo.description}</p>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  src={demo.videoSrc}
                  autoPlay={index === 0}
                  muted={index === 0}
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