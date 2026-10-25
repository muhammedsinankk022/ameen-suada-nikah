import React from "react";
import { MapPin, Clock } from "lucide-react";
import { BackgroundMonogram } from "../common/BackgroundMonogram";
import { BrassLantern } from "../common/BrassLantern";
import { ActionButtons } from "../finale/ActionButtons";
import { WEDDING_CONFIG } from "../../config/wedding.config";

export const Scene5BrideAndGroom: React.FC = () => {
  return (
    <section
      id="scene-characters"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-[#FCFAF6] via-[#EDF5F1] to-[#FCFAF6] overflow-hidden text-center"
    >
      {/* Hanging Brass Lanterns */}
      <div className="absolute top-0 left-6 sm:left-14 z-10 hidden sm:block">
        <BrassLantern size="md" chainLength={40} />
      </div>
      <div className="absolute top-0 right-6 sm:right-14 z-10 hidden sm:block">
        <BrassLantern size="md" chainLength={40} />
      </div>

      {/* Subtle Background Monogram */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <BackgroundMonogram size="hero" subtle />
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center z-10">
        {/* Monogram Emblem */}
        <div className="mb-2">
          <BackgroundMonogram size="sm" subtle />
        </div>

        {/* Couple Names Header */}
        <div className="my-2">
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#0D4736] tracking-widest flex items-center justify-center gap-2">
            <span>Ameen</span>
            <span className="text-[#C5A059] text-[0.8em] animate-pulse">♥</span>
            <span>Suada</span>
          </h2>
        </div>

        {/* Section Title */}
        <h3 className="font-['Cinzel'] text-lg sm:text-2xl font-bold text-[#08281E] tracking-wider mb-2">
          The Groom & Bride
        </h3>

        {/* Romantic Caption */}
        <p className="font-['Cormorant_Garamond'] italic text-base sm:text-xl text-[#0D4736] max-w-lg mb-6 leading-relaxed font-medium">
          "A new chapter. A lifetime of togetherness."
        </p>

        {/* Illustrated Wedding Characters Card (Original Artwork) */}
        <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden border-2 border-[#C5A059]/50 shadow-[0_20px_60px_rgba(13,71,54,0.22)] group bg-[#EDF5F1]">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src="./assets/images/scene_couple.jpg"
              alt="Ameen & Suada - Faceless Kerala Muslim Couple in Ivory Sherwani and Blush Bridal Attire"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 text-left text-white drop-shadow-md">
              <span className="font-['Cinzel'] text-[10px] sm:text-xs tracking-widest uppercase text-[#E8D39E] font-semibold block">
                Ameen & Suada
              </span>
              <p className="font-['Montserrat'] text-xs sm:text-sm text-white/95">
                The groom in refined ivory and gold beside the bride in an embroidered blush-rose bridal gown with a graceful flowing veil.
              </p>
            </div>
          </div>
        </div>

        {/* Dual Programmes Schedule Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
          {/* Programme 1: Nikah */}
          <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#C5A059]/40 shadow-xs flex flex-col items-center text-center">
            <span className="font-['Cinzel'] text-[10px] tracking-widest uppercase text-[#C5A059] font-bold">
              Programme 1
            </span>
            <h4 className="font-['Cinzel'] text-sm font-bold text-[#0D4736] mt-0.5">
              Nikah Ceremony
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-[#08281E] font-medium mt-1">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{WEDDING_CONFIG.nikah.timeFormatted}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#08281E]/80 mt-0.5">
              <MapPin className="w-3 h-3 text-[#C5A059]" />
              <span>{WEDDING_CONFIG.nikah.venueName}, {WEDDING_CONFIG.nikah.venueCity}</span>
            </div>
            <a
              href={WEDDING_CONFIG.nikah.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0D4736]/10 hover:bg-[#0D4736]/20 text-[#0D4736] text-[10px] font-['Cinzel'] font-bold transition-colors"
            >
              <span>Mosque Directions</span>
            </a>
          </div>

          {/* Programme 2: Reception */}
          <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#C5A059]/40 shadow-xs flex flex-col items-center text-center">
            <span className="font-['Cinzel'] text-[10px] tracking-widest uppercase text-[#C5A059] font-bold">
              Programme 2
            </span>
            <h4 className="font-['Cinzel'] text-sm font-bold text-[#0D4736] mt-0.5">
              Wedding Reception
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-[#08281E] font-medium mt-1">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{WEDDING_CONFIG.reception.timeFormatted}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#08281E]/80 mt-0.5">
              <MapPin className="w-3 h-3 text-[#C5A059]" />
              <span>{WEDDING_CONFIG.reception.venueName}, {WEDDING_CONFIG.reception.venueCity}</span>
            </div>
            <a
              href={WEDDING_CONFIG.reception.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0D4736]/10 hover:bg-[#0D4736]/20 text-[#0D4736] text-[10px] font-['Cinzel'] font-bold transition-colors"
            >
              <span>Auditorium Directions</span>
            </a>
          </div>
        </div>

        {/* Family Lineage Box */}
        <div className="mt-6 space-y-1.5 text-center py-3.5 px-6 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#C5A059]/40 w-full max-w-md shadow-xs">
          <p className="font-['Cinzel'] text-xs sm:text-sm font-semibold text-[#08281E] tracking-wide">
            {WEDDING_CONFIG.groom.familyLine}
          </p>
          <div className="w-12 h-[1px] bg-[#C5A059]/40 mx-auto" />
          <p className="font-['Cinzel'] text-xs sm:text-sm font-semibold text-[#08281E] tracking-wide">
            {WEDDING_CONFIG.bride.familyLine}
          </p>
        </div>

        {/* Closing Blessings Message */}
        <div className="mt-5 px-4 py-2.5 rounded-xl bg-[#EDF5F1]/80 border border-[#C5A059]/40 max-w-md">
          <p className="font-['Cormorant_Garamond'] italic text-base sm:text-lg text-[#0D4736] font-semibold leading-relaxed">
            "Your presence and duas will make this occasion even more special."
          </p>
        </div>

        {/* Action Buttons: Add to Calendar, Venue Map, Share Invitation */}
        <div className="mt-6 w-full max-w-md">
          <ActionButtons />
        </div>
      </div>
    </section>
  );
};
