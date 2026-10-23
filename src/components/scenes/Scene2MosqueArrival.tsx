import React from "react";
import { MapPin, Clock } from "lucide-react";
import { BackgroundMonogram } from "../common/BackgroundMonogram";
import { BrassLantern } from "../common/BrassLantern";
import { WEDDING_CONFIG } from "../../config/wedding.config";

export const Scene2MosqueArrival: React.FC = () => {
  return (
    <section
      id="scene-2"
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

        {/* Time Badge: 10:30 AM */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D1E6DC]/60 border border-[#C5A059]/50 shadow-xs mb-3">
          <Clock className="w-3.5 h-3.5 text-[#0D4736]" />
          <span className="font-['Cinzel'] text-xs font-bold text-[#0D4736] tracking-widest uppercase">
            {WEDDING_CONFIG.nikah.timeFormatted} • {WEDDING_CONFIG.nikah.title}
          </span>
        </div>

        {/* Scene Title */}
        <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#08281E] tracking-wider mb-2">
          Arriving at {WEDDING_CONFIG.nikah.venueName}
        </h2>

        {/* Venue Location Subtitle */}
        <p className="font-['Montserrat'] text-xs sm:text-sm text-[#0D4736] font-semibold mb-3 flex items-center justify-center gap-1.5">
          <MapPin className="w-4 h-4 text-[#C5A059]" />
          <span>{WEDDING_CONFIG.nikah.venueName}, {WEDDING_CONFIG.nikah.venueCity}</span>
        </p>

        {/* Caption */}
        <p className="font-['Cormorant_Garamond'] italic text-base sm:text-xl text-[#0D4736] max-w-lg mb-8 leading-relaxed">
          "A blessed morning. A gathering of families. Arriving at the holy courtyard for the sacred Nikah."
        </p>

        {/* Illustrated Mosque Card */}
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
                  {WEDDING_CONFIG.nikah.venueName}, {WEDDING_CONFIG.nikah.venueCity}
                </span>
                <p className="font-['Montserrat'] text-xs sm:text-sm text-white/95">
                  Faceless illustrated guests gathering in the sunlit courtyard in traditional Kerala Muslim attire.
                </p>
              </div>

              <a
                href={WEDDING_CONFIG.nikah.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0D4736]/90 hover:bg-[#0D4736] border border-[#C5A059] text-white text-xs font-['Cinzel'] tracking-wider shadow-md transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E8D39E]" />
                <span>Mosque Map</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
