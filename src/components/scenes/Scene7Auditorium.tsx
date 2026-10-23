import React from "react";
import { MapPin, Calendar, Clock, ExternalLink } from "lucide-react";
import { WEDDING_CONFIG } from "../../config/wedding.config";
import { BackgroundMonogram } from "../common/BackgroundMonogram";

export const Scene7Auditorium: React.FC = () => {
  return (
    <section
      id="scene-7"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-[#FCFAF6] via-[#EDF5F1] to-[#FCFAF6] overflow-hidden"
    >
      <div className="absolute top-1/2 right-6 -translate-y-1/2 pointer-events-none opacity-20">
        <BackgroundMonogram size="md" subtle />
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Programme 2 Header Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#C5A059] text-[#08281E] shadow-md mb-4 border border-[#0D4736]/30">
          <span className="w-2 h-2 rounded-full bg-[#0D4736] animate-pulse" />
          <span className="font-['Cinzel'] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
            PROGRAMME 2 • WEDDING RECEPTION
          </span>
        </div>

        {/* Scene Title */}
        <h2 className="font-['Cinzel'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#08281E] tracking-wider mb-2">
          Transitioning to {WEDDING_CONFIG.reception.venueName}
        </h2>

        {/* Venue Information Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-['Cinzel'] text-[#08281E] mb-6">
          <span className="font-bold text-[#0D4736]">
            {WEDDING_CONFIG.reception.venueName}
          </span>
          <span className="text-[#C5A059]">•</span>
          <span>{WEDDING_CONFIG.reception.venueCity}</span>
          <span className="text-[#C5A059]">•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            {WEDDING_CONFIG.eventDate.dateFormatted}
          </span>
          <span className="text-[#C5A059]">•</span>
          <span className="flex items-center gap-1 font-bold text-[#0D4736]">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            {WEDDING_CONFIG.reception.timeFormatted}
          </span>
        </div>

        {/* Illustrated Venue Entrance Card */}
        <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden border-2 border-[#C5A059]/60 shadow-[0_20px_60px_rgba(13,71,54,0.25)] group bg-[#EDF5F1]">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src="./assets/images/scene_auditorium.jpg"
              alt="Shubham Auditorium Elamkulam - Wedding Reception Grand Hall Entrance"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-left text-white drop-shadow-md">
              <div>
                <span className="font-['Cinzel'] text-[10px] sm:text-xs tracking-widest uppercase text-[#E8D39E] font-semibold block">
                  {WEDDING_CONFIG.reception.venueName}, {WEDDING_CONFIG.reception.venueCity} • {WEDDING_CONFIG.reception.timeFormatted}
                </span>
                <p className="font-['Montserrat'] text-xs sm:text-sm text-white/95">
                  Following the mosque Nikah, join us for the grand feast and joyful celebration at Shubham Auditorium.
                </p>
              </div>

              {/* View Auditorium Location Button */}
              <a
                href={WEDDING_CONFIG.reception.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0D4736]/90 hover:bg-[#0D4736] border border-[#C5A059] text-white text-xs font-['Cinzel'] tracking-wider shadow-md transition-all hover:scale-105"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E8D39E]" />
                <span>Auditorium Map</span>
                <ExternalLink className="w-3 h-3 text-white/80" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
