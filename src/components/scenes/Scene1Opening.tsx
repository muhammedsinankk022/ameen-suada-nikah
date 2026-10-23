import React from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { BismillahCalligraphy } from "../common/BismillahCalligraphy";
import { BackgroundMonogram } from "../common/BackgroundMonogram";
import { BrassLantern } from "../common/BrassLantern";
import { WEDDING_CONFIG } from "../../config/wedding.config";

interface Scene1OpeningProps {
  onEnterStory: () => void;
}

export const Scene1Opening: React.FC<Scene1OpeningProps> = ({ onEnterStory }) => {
  return (
    <section
      id="scene-1"
      className="relative min-h-screen w-full flex flex-col items-center justify-between py-12 px-4 bg-gradient-to-b from-[#FCFAF6] via-[#EDF5F1] to-[#FCFAF6] text-center overflow-hidden"
    >
      {/* Hanging Brass Lanterns */}
      <div className="absolute top-0 left-6 sm:left-16 z-10">
        <BrassLantern size="md" chainLength={50} />
      </div>
      <div className="absolute top-0 right-6 sm:right-16 z-10">
        <BrassLantern size="lg" chainLength={30} />
      </div>

      {/* Top Header: Bismillah */}
      <div className="pt-8 sm:pt-12 z-20">
        <BismillahCalligraphy size="lg" />
      </div>

      {/* Central Monogram Reveal: A ♥ S in Emerald & Gold */}
      <div className="relative my-auto flex flex-col items-center justify-center z-20 max-w-xl px-4">
        {/* Background monogram aura */}
        <div className="absolute -inset-10 flex items-center justify-center pointer-events-none opacity-25">
          <BackgroundMonogram size="hero" subtle={false} />
        </div>

        {/* Revealed Initials in antique gold with emerald glow: A ♥ S */}
        <div className="relative flex items-center justify-center gap-3 font-['Cinzel'] text-6xl sm:text-7xl lg:text-8xl font-bold tracking-widest text-[#C5A059] drop-shadow-[0_4px_24px_rgba(197,160,89,0.45)] animate-soft-glow">
          <span>A</span>
          <span className="text-[#0D4736] text-[0.65em] animate-pulse">♥</span>
          <span>S</span>
        </div>

        <h1 className="font-['Cinzel'] text-base sm:text-lg tracking-[0.3em] uppercase text-[#08281E] font-bold mt-4">
          {WEDDING_CONFIG.couple.title}
        </h1>

        {/* Dual Programme Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
          <span className="px-3 py-1 rounded-full bg-[#0D4736]/10 border border-[#0D4736]/30 text-[#0D4736] font-['Cinzel'] text-[11px] tracking-wider uppercase font-semibold">
            10:30 AM • Nikah Ceremony
          </span>
          <span className="text-[#C5A059]">•</span>
          <span className="px-3 py-1 rounded-full bg-[#0D4736]/10 border border-[#0D4736]/30 text-[#0D4736] font-['Cinzel'] text-[11px] tracking-wider uppercase font-semibold">
            12:00 PM • Reception
          </span>
        </div>

        {/* Opening Blessing */}
        <p className="font-['Cormorant_Garamond'] italic text-lg sm:text-2xl text-[#0D4736] mt-3 font-medium max-w-md">
          With the blessings of Allah, we joyfully invite you to celebrate the wedding of Ameen and Suada.
        </p>

        <p className="font-['Montserrat'] text-xs text-[#5C5248] mt-2 max-w-sm leading-relaxed font-medium">
          Sunday, 8 November 2026<br />
          Nikah at Masjidul Noor, Pallippadi • Reception at Shubham Auditorium, Elamkulam
        </p>

        {/* "Enter the Wedding Story" Button */}
        <div className="mt-8">
          <button
            onClick={onEnterStory}
            type="button"
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0D4736] via-[#125441] to-[#0D4736] text-white font-['Cinzel'] text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-[0_8px_30px_rgba(13,71,54,0.35)] hover:shadow-[0_12px_40px_rgba(13,71,54,0.5)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer border border-[#C5A059]/40"
          >
            <Sparkles className="w-4 h-4 text-[#E8D39E] group-hover:rotate-12 transition-transform" />
            <span>Enter the Wedding Story</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="pb-4 z-20 flex flex-col items-center text-[#5C5248] opacity-75">
        <p className="font-['Montserrat'] text-[10px] tracking-widest uppercase mb-1">
          Scroll to explore the journey
        </p>
        <div className="w-5 h-8 rounded-full border border-[#C5A059] flex items-start justify-center p-1">
          <div className="w-1.5 h-2 rounded-full bg-[#0D4736] animate-bounce" />
        </div>
      </div>
    </section>
  );
};
