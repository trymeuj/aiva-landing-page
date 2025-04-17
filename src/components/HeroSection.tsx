"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define service icons with their paths
const serviceIcons = [
  { name: 'WhatsApp', path: '/WhatsApp-logo.svg' },
  { name: 'Gmail', path: '/Gmail_icon.svg' },
  { name: 'Calendar', path: '/Google_Calendar_icon.svg' },
  { name: 'Meet', path: '/Google_Meet_icon.svg' }, 
  // { name: 'Gmail', path: '/Gmail_icon.svg' }, 
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationDirection, setRotationDirection] = useState(-1); // Changed to -1 for reverse rotation
  const [autoRotate, setAutoRotate] = useState(true);
  const totalSlides = 4;
  const mediaRefs = useRef<(HTMLImageElement | HTMLVideoElement | null)[]>([]);
  const fallbackTimer = useRef<NodeJS.Timeout | null>(null);
  
  // Media types for each slide (image, gif, video)
  const slides = [
    { id: 1, src: '/whatsapp-demo3.mp4', alt: 'WhatsApp Video Demo', type: 'video' },
    { id: 2, src: '/gmail-demo.mp4', alt: 'Aiva in action 1', type: 'video' },
    { id: 3, src: '/calendar-demo.mp4', alt: 'WhatsApp Automation Demo', type: 'video' },
    { id: 4, src: '/Meet-demo.mp4', alt: 'Aiva in action 2', type: 'video' },
    // { id: 5, src: '/carousel-3.jpg', alt: 'Aiva in action 3', type: 'image' },
  ];

  // Function to advance to next slide
  const advanceSlide = () => {
    if (!autoRotate) return;
    
    // Add 2 second delay before advancing
    setTimeout(() => {
      // Calculate next index based on rotation direction
      if (rotationDirection === -1) {
        setActiveIndex((current) => 
          (current + 1) % totalSlides
        );
      } else {
        setActiveIndex((current) => 
          current === 0 ? totalSlides - 1 : current - 1
        );
      }
    }, 2000); // 2 second delay after content completes
  };

  // Toggle rotation direction every full cycle
  useEffect(() => {
    if (activeIndex === totalSlides - 1) {
      setRotationDirection(prev => prev * -1); // Toggle between -1 and 1
    }
  }, [activeIndex]);
  
  // Handle media playback and rotation
  useEffect(() => {
    // Clear any existing timers
    if (fallbackTimer.current) {
      clearTimeout(fallbackTimer.current);
      fallbackTimer.current = null;
    }
    
    const currentSlide = slides[activeIndex];
    const mediaElement = mediaRefs.current[activeIndex];
    
    // For GIFs we need to handle them specially since they don't have natural onended events
    if (currentSlide.type === 'gif' && mediaElement instanceof HTMLImageElement) {
      // For GIFs, we can use a technique to reload the image to detect when it's fully loaded
      // First get a fresh instance to force reload
      const tempImg = document.createElement('img');
      tempImg.src = currentSlide.src;
      
      // When loaded, we can estimate GIF duration from its properties or use a fallback
      tempImg.onload = () => {
        // Set a reasonable timer based on GIF size - this is an estimate
        // For a better solution, you'd need to parse the GIF file to get actual duration
        // Here we use a heuristic of 5-10 seconds for most GIFs
        const estimatedDuration = 7000; // Adjust based on your specific GIFs
        
        fallbackTimer.current = setTimeout(() => {
          advanceSlide();
        }, estimatedDuration);
      };
      
      // Fallback in case the load event doesn't fire
      fallbackTimer.current = setTimeout(() => {
        advanceSlide();
      }, 8000);
    } 
    // For videos, we can use the natural ended event
    else if (currentSlide.type === 'video' && mediaElement instanceof HTMLVideoElement) {
      const handleVideoEnd = () => {
        advanceSlide();
      };
      
      mediaElement.addEventListener('ended', handleVideoEnd);
      
      // Start playing
      mediaElement.play().catch(error => {
        console.error('Error playing video:', error);
        // Fallback if autoplay fails
        fallbackTimer.current = setTimeout(() => {
          advanceSlide();
        }, 5000);
      });
      
      return () => {
        mediaElement.removeEventListener('ended', handleVideoEnd);
      };
    } 
    // For static images, use a fixed duration
    else {
      fallbackTimer.current = setTimeout(() => {
        advanceSlide();
      }, 3000);
    }
    
    return () => {
      if (fallbackTimer.current) {
        clearTimeout(fallbackTimer.current);
      }
    };
  }, [activeIndex, autoRotate, rotationDirection]);

  // Simple style to hide video controls
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      video::-webkit-media-controls-enclosure,
      video::-webkit-media-controls,
      video::-webkit-media-controls-panel,
      video::-webkit-media-controls-overlay-play-button {
        display: none !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      
      .video-container {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: #fff;
        aspect-ratio: 2.35/1;
        width: 100%;
        position: relative;
      }
      
      .video-container video {
        width: auto;
        height: 100%;
        max-width: none;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        object-fit: contain;
        background: transparent;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="w-full pt-24 md:pt-32 pb-16 bg-background">
      <div className="max-w-content mx-auto px-container text-center">
        {/* Hero Text */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight text-foreground">
          AIVA is to You what Jarvis is to Iron Man
        </h1>
        
        <p className="text-xl md:text-2xl text-tertiary max-w-2xl mx-auto mb-14">
          AI Agents at your service, Always. Automate Tasks across your Work and Life
        </p>
          
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-24">
        <button 
            className="bg-[#111111] text-white px-7 py-3 rounded-md hover:opacity-90 transition-opacity"
            data-tally-open="3y7qQB" 
            data-tally-layout="modal" 
            data-tally-width="600" 
            data-tally-hide-title="0" 
            data-tally-emoji-text="👋" 
            data-tally-emoji-animation="wave" 
            data-tally-auto-close="3"
          >
            Get Your Jarvis
          </button>
          <Link href="/demo" className="bg-secondaryButtonBg text-secondaryButtonText border border-secondaryButtonBorder px-button-padding-x py-button-padding-y rounded-button secondary-button font-medium">
            Watch Demo
          </Link>
        </div>
        
        {/* Use Cases Heading */}
        <h2 id="use-cases" className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#222222]">
          Watch AIVA in Action
        </h2>
        
        {/* Carousel */}
        <div className="relative w-full max-w-5xl mx-auto h-[350px] md:h-[500px] overflow-hidden mb-0 bg-transparent">
          <div className="flex justify-center items-center h-full bg-transparent">
            {slides.map((slide, index) => {
              // Calculate position relative to active slide
              const position = (index - activeIndex + totalSlides) % totalSlides;
              
              // Determine styling based on position from center
              let size = "w-1/2 h-1/2 opacity-40";
              let zIndex = 0;
              
              if (position === 0) {
                size = "w-[85%] h-[85%] opacity-100";
                zIndex = 30;
              } else if (position === 1 || position === totalSlides - 1) {
                size = "w-2/3 h-2/3 opacity-70";
                zIndex = 20;
              } else {
                zIndex = 10;
              }
              
              // Calculate horizontal position
              let translateX = 0;
              if (position === 0) {
                translateX = 0;
              } else if (position === 1) {
                translateX = 60;
              } else if (position === totalSlides - 1) {
                translateX = -60;
              } else if (position < totalSlides / 2) {
                translateX = 90;
              } else {
                translateX = -90;
              }
              
              return (
                <div
                  key={slide.id}
                  className={`absolute rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${size}`}
                  style={{
                    transform: `translateX(${translateX}%)`,
                    zIndex: zIndex
                  }}
                  onClick={() => {
                    // Clear any existing timers when manually changing slides
                    if (fallbackTimer.current) {
                      clearTimeout(fallbackTimer.current);
                      fallbackTimer.current = null;
                    }
                    
                    setActiveIndex(index);
                    setAutoRotate(false); // Pause auto-rotation when user interacts
                    setTimeout(() => setAutoRotate(true), 10000); // Resume after 10 seconds
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    {slide.type === 'video' ? (
                      <div className="video-container w-full h-full flex items-center justify-center">
                        <video
                          className="rounded-xl"
                          ref={(el) => { mediaRefs.current[index] = el; }}
                          src={slide.src}
                          muted
                          playsInline
                          autoPlay
                          loop={false}
                        />
                      </div>
                    ) : (
                      <Image
                        className="rounded-xl"
                        ref={(el) => { 
                          if (el) {
                            mediaRefs.current[index] = el as unknown as HTMLImageElement;
                          }
                        }}
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                        priority={position === 0}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Service Logos instead of Dots - Lined up with spacing */}
        <div className="relative flex justify-center items-center h-12 mt-1">
          {slides.map((_, index) => {
            const icon = serviceIcons[index];
            
            // Calculate position relative to active slide - similar to carousel logic
            const position = (index - activeIndex + totalSlides) % totalSlides;
            
            // Determine size and horizontal position with more spacing
            let size = "w-6 h-6";
            let translateX = 0; // Using pixels instead of percentages for better control
            let opacity = "opacity-30";
            
            if (position === 0) {
              size = "w-14 h-14";
              translateX = 0; // Center
              opacity = "opacity-100";
            } else if (position === 1) {
              size = "w-8 h-8";
              translateX = 65; // 65px to the right
              opacity = "opacity-60";
            } else if (position === totalSlides - 1) {
              size = "w-8 h-8";
              translateX = -65; // 65px to the left
              opacity = "opacity-60";
            } else if (position === 2) {
              translateX = 130; // 130px to the right
            } else if (position === totalSlides - 2) {
              translateX = -130; // 130px to the left
            } else if (position < totalSlides / 2) {
              translateX = 190; // Further right
            } else {
              translateX = -190; // Further left
            }
            
            return (
              <button
                key={index}
                className={`absolute transition-all duration-300 ${opacity} hover:opacity-90`}
                style={{
                  transform: `translateX(${translateX}px)`,
                }}
                onClick={() => {
                  // Clear any existing timers when manually changing slides
                  if (fallbackTimer.current) {
                    clearTimeout(fallbackTimer.current);
                    fallbackTimer.current = null;
                  }
                  
                  setActiveIndex(index);
                  setAutoRotate(false); // Pause auto-rotation when user interacts
                  setTimeout(() => setAutoRotate(true), 10000); // Resume after 10 seconds
                }}
                aria-label={`Go to ${icon.name} slide`}
              >
                <div className={`relative ${size} transition-all duration-300`}>
                  <Image 
                    src={icon.path} 
                    alt={icon.name} 
                    fill 
                    style={{ objectFit: 'contain' }} 
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 