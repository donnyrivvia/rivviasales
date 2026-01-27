'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const goldenDoorWinners = [
  {
    videoId: "202f6766-8911-4b1d-a3a4-3142365ae6dc",
    author: "Golden Door Winner",
    role: "Rivvia Team Member",
  },
  {
    videoId: "33dfcd85-fbe4-4e99-9210-9712a09dedf0",
    author: "Golden Door Winner",
    role: "Rivvia Team Member",
  },
  {
    videoId: "b8562cbf-b21c-4e6b-af12-4b0582d07e40",
    author: "Golden Door Winner",
    role: "Rivvia Team Member",
  },
  {
    videoId: "380be2c9-4183-4b4e-97e8-a19205c27cd0",
    author: "Golden Door Winner",
    role: "Rivvia Team Member",
  },
];

export default function GoldenDoorPage() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Handle video play - pause all other videos
  const handleVideoPlay = (playingIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== playingIndex && !video.paused) {
        video.pause();
      }
    });
  };

  // Add play event listeners to all videos
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        const playHandler = () => handleVideoPlay(index);
        video.addEventListener('play', playHandler);
        return () => video.removeEventListener('play', playHandler);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section data-theme="dark" className="relative pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="line-accent mb-6 mx-auto" />
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
              GOLDEN DOOR WINNERS
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Meet our top performers who have achieved excellence through dedication, 
              hard work, and commitment to success at Rivvia.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Grid Section */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {goldenDoorWinners.map((winner, index) => (
              <div
                key={index}
                className="relative border border-white/10 hover:border-white/20 transition-colors overflow-hidden"
              >
                {/* Video */}
                <div className="w-full bg-black">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    controls
                    className="w-full"
                    preload="metadata"
                  >
                    <source src={`https://vz-d6574812-a94.b-cdn.net/${winner.videoId}/play_1080p.mp4`} type="video/mp4" />
                    <source src={`https://vz-d6574812-a94.b-cdn.net/${winner.videoId}/play_720p.mp4`} type="video/mp4" />
                  </video>
                </div>

                {/* Author Info */}
                <div className="p-6 bg-black/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium">
                        {winner.author.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-white/90">
                        {winner.author}
                      </div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">
                        {winner.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
