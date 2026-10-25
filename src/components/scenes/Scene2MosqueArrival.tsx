import React from "react";
import { MapPin, Calendar, Clock, ChevronDown } from "lucide-react";
import { BackgroundMonogram } from "../common/BackgroundMonogram";
import { BrassLantern } from "../common/BrassLantern";
import { BismillahCalligraphy } from "../common/BismillahCalligraphy";
import { WEDDING_CONFIG } from "../../config/wedding.config";

interface Scene2MosqueArrivalProps {
  onScrollToNext?: () => void;
}

export const Scene2MosqueArrival: React.FC<Scene2MosqueArrivalProps> = ({ onScrollToNext }) => {
  return (
    <section
      id="scene-mosque"
      className="relative min-h-screen w-full flex flex-col items-center justify-between pt-16 pb-12 px-4 bg-gradient-to-b from-[#FCFAF6] via-[#EDF5F1] to-[#FCFAF6] overflow-hidden text-center"
    >
      {/* Lanterns on sides */}
      <div className="absolute top-0 left-6 sm:left-14 z-10 hidden sm:block">
        <BrassLantern size="md" chainLength={45} />
      </div>
      <div className="absolute top-0 right-6 sm:right-14 z-10 hidden sm:block">
        <BrassLantern size="lg" chainLength={30} />
      </div>

      {/* Subtle Background Monogram */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <BackgroundMonogram size="hero" subtle />
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center z-10">
        {/* Top Opening: Bismillah Calligraphy */}
        <div className="pt-2 sm:pt-4 mb-4">
          <BismillahCalligraphy size="md" />
        </div>

        {/* Monogram Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-[#C5A059]/50" />
          <span className="font-['Cinzel'] text-xs font-bold tracking-[0.3em] text-[#C5A059] uppercase">
            A ♥ S
          </span>
          <span className="w-8 h-[1px] bg-[#C5A059]/50" />
        </div>

        {/* MAIN EVENT HEADING: NIKAH & RECEPTION */}
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full border-2 border-[#C5A059] bg-[#EDF5F1] shadow-sm mb-3">
          <h1 className="font-['Cinzel'] text-sm sm:text-base font-bold tracking-[0.35em] text-[#0D4736] uppercase">
            NIKAH & RECEPTION
          </h1>
        </div>

        {/* Couple Names */}
        <h2 className="font-['Cinzel'] text-2xl sm:text-4xl lg:text-5xl font-bold text-[#08281E] tracking-wider mb-2">
          {WEDDING_CONFIG.couple.title}
        </h2>

        {/* Dual Programmes Schedule & Date */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#C5A059]/40 text-[#08281E] text-xs font-['Cinzel'] font-semibold shadow-xs mb-3">
          <span className="flex items-center gap-1.5 text-[#0D4736]">
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            {WEDDING_CONFIG.eventDate.dateFormatted}
          </span>
          <span className="text-[#C5A059] hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 text-[#0D4736]">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            10:30 AM Nikah • 12:00 PM Reception
          </span>
        </div>

        {/* Official Opening Caption */}
        <p className="font-['Cormorant_Garamond'] italic text-base sm:text-xl text-[#0D4736] max-w-xl mb-6 leading-relaxed font-medium">
          "With the blessings of Allah, we joyfully invite you to celebrate the wedding of Ameen and Suada."
        </p>

        {/* Illustrated Mosque Card (Original Artwork) */}
        <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden border-2 border-[#C5A059]/50 shadow-[0_20px_60px_rgba(13,71,54,0.22)] group bg-[#EDF5F1]">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src="./assets/images/scene_mosque_v2.jpg"
              alt="Ameen & Suada - Mosque Entrance & Arrival at Masjidul Noor"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-left text-white drop-shadow-md">
              <div>
                <span className="font-['Cinzel'] text-[10px] sm:text-xs tracking-widest uppercase text-[#E8D39E] font-semibold block">
                  Programme 1 • Nikah Ceremony (10:30 AM IST)
                </span>
                <p className="font-['Montserrat'] text-xs sm:text-sm text-white/95">
                  {WEDDING_CONFIG.nikah.venueName}, {WEDDING_CONFIG.nikah.venueCity}
                </p>
              </div>

              <a
                href={WEDDING_CONFIG.nikah.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0D4736] hover:bg-[#125441] border border-[#C5A059] text-white text-xs font-['Cinzel'] tracking-wider shadow-md transition-all transform hover:scale-105"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E8D39E]" />
                <span>Mosque Map</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Guide to Section 2 */}
        {onScrollToNext && (
          <button
            type="button"
            onClick={onScrollToNext}
            aria-label="Scroll to view Wedding Characters"
            className="mt-6 inline-flex flex-col items-center gap-1 text-[#0D4736] opacity-80 hover:opacity-100 transition-opacity cursor-pointer group"
          >
            <span className="font-['Montserrat'] text-[10px] tracking-widest uppercase font-medium">
              View Wedding Couple
            </span>
            <ChevronDown className="w-4 h-4 text-[#0D4736] animate-bounce" />
          </button>
        )}
      </div>
    </section>
  );
};
