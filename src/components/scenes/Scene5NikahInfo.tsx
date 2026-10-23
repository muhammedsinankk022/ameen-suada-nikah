import React from "react";
import { Clock, MapPin, ExternalLink } from "lucide-react";
import { WEDDING_CONFIG } from "../../config/wedding.config";
import { BackgroundMonogram } from "../common/BackgroundMonogram";

export const Scene5NikahInfo: React.FC = () => {
  return (
    <section
      id="scene-nikah-info"
      className="relative min-h-[85vh] w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-[#FCFAF6] via-[#EDF5F1] to-[#FCFAF6] overflow-hidden"
    >
      <div className="absolute top-1/2 right-6 -translate-y-1/2 pointer-events-none opacity-20">
        <BackgroundMonogram size="md" subtle />
      </div>

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Programme 1 Header Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0D4736] text-white shadow-md mb-4 border border-[#C5A059]/40">
          <span className="w-2 h-2 rounded-full bg-[#E8D39E] animate-ping" />
          <span className="font-['Cinzel'] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
            PROGRAMME 1 • NIKAH CEREMONY
          </span>
        </div>

        <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#08281E] tracking-wider mb-2">
          {WEDDING_CONFIG.nikah.venueName}
        </h2>

        <p className="font-['Cormorant_Garamond'] italic text-base sm:text-xl text-[#0D4736] max-w-md mb-8">
          The solemnisation of the Nikah ceremony under the grace of Almighty Allah.
        </p>

        {/* Info Card in Rich Emerald & Gold */}
        <div className="w-full rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0D4736] to-[#08281E] text-white border-2 border-[#C5A059] shadow-[0_20px_50px_rgba(13,71,54,0.3)] text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {/* Event Time */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-[#C5A059]/30">
                <Clock className="w-5 h-5 text-[#E8D39E]" />
              </div>
              <div>
                <span className="font-['Cinzel'] text-[10px] uppercase tracking-widest text-[#E8D39E] block">
                  Nikah Ceremony Time
                </span>
                <span className="font-['Cinzel'] text-lg font-bold block text-white mt-0.5">
                  {WEDDING_CONFIG.nikah.timeFormatted}
                </span>
                <span className="font-['Montserrat'] text-xs text-white/80">
                  {WEDDING_CONFIG.eventDate.dayFormatted}, {WEDDING_CONFIG.eventDate.dateFormatted}
                </span>
              </div>
            </div>

            {/* Event Venue */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-[#C5A059]/30">
                <MapPin className="w-5 h-5 text-[#E8D39E]" />
              </div>
              <div>
                <span className="font-['Cinzel'] text-[10px] uppercase tracking-widest text-[#E8D39E] block">
                  Ceremony Location
                </span>
                <span className="font-['Cinzel'] text-lg font-bold block text-white mt-0.5">
                  {WEDDING_CONFIG.nikah.venueName}
                </span>
                <span className="font-['Montserrat'] text-xs text-white/80">
                  {WEDDING_CONFIG.nikah.venueCity}, Kerala
                </span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-['Montserrat'] text-xs text-white/85 text-center sm:text-left">
              📍 Official mosque destination for family, relatives, and invited guests.
            </p>

            <a
              href={WEDDING_CONFIG.nikah.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#08281E] font-['Cinzel'] text-xs font-bold tracking-wider transition-all shadow-md transform hover:scale-105"
            >
              <MapPin className="w-4 h-4 text-[#08281E]" />
              <span>Get Mosque Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
