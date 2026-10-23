import React from "react";
import { Clock } from "lucide-react";
import { BackgroundMonogram } from "../common/BackgroundMonogram";
import { BrassLantern } from "../common/BrassLantern";
import { WEDDING_CONFIG } from "../../config/wedding.config";

export const Scene3NikahGathering: React.FC = () => {
  return (
    <section
      id="scene-3"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-[#FCFAF6] via-[#EDF5F1] to-[#FCFAF6] overflow-hidden"
    >
      {/* Lanterns on sides */}
      <div className="absolute top-0 left-6 z-10 hidden sm:block">
        <BrassLantern size="md" chainLength={40} />
      </div>
      <div className="absolute top-0 right-6 z-10 hidden sm:block">
        <BrassLantern size="md" chainLength={40} />
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Monogram */}
        <div className="mb-2">
          <BackgroundMonogram size="sm" subtle />
        </div>

        {/* Programme 1 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D1E6DC]/60 border border-[#C5A059]/50 shadow-xs mb-3">
          <Clock className="w-3.5 h-3.5 text-[#0D4736]" />
          <span className="font-['Cinzel'] text-xs font-bold text-[#0D4736] tracking-widest uppercase">
            {WEDDING_CONFIG.nikah.badge} • {WEDDING_CONFIG.nikah.timeFormatted}
          </span>
        </div>

        {/* Scene Title */}
        <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#08281E] tracking-wider mb-2">
          The Solemn Nikah Ceremony
        </h2>

        {/* Caption */}
        <p className="font-['Cormorant_Garamond'] italic text-base sm:text-xl text-[#0D4736] max-w-lg mb-8 leading-relaxed">
          "With the blessings of Allah, two souls solemnise their sacred bond at Masjidul Noor, Pallippadi."
        </p>

        {/* Illustrated Nikah Card */}
        <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden border-2 border-[#C5A059]/50 shadow-[0_20px_60px_rgba(13,71,54,0.22)] group bg-[#EDF5F1]">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src="./assets/images/scene_nikah.jpg"
              alt="Ameen & Suada - Solemn Nikah Ceremony at Masjidul Noor"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 text-left text-white drop-shadow-md">
              <span className="font-['Cinzel'] text-[10px] sm:text-xs tracking-widest uppercase text-[#E8D39E] font-semibold block">
                Masjidul Noor, Pallippadi • 10:30 AM IST
              </span>
              <p className="font-['Montserrat'] text-xs sm:text-sm text-white/95">
                The sacred handshake and mutual consent amidst respectful family elders and sincere prayers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
