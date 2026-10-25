import React, { useState, useRef, useEffect } from "react";
import { Clock, MapPin, Camera, RefreshCw, X, Maximize2, ExternalLink } from "lucide-react";
import { WEDDING_CONFIG } from "../../config/wedding.config";
import { BismillahCalligraphy } from "../common/BismillahCalligraphy";
import { BrassLantern } from "../common/BrassLantern";
import { BackgroundMonogram } from "../common/BackgroundMonogram";
import { CountdownTimer } from "../finale/CountdownTimer";
import { ActionButtons } from "../finale/ActionButtons";
import { AudioPlayerCard } from "../common/AudioPlayer";

interface Scene10InvitationCardProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
}

export const Scene10InvitationCard: React.FC<Scene10InvitationCardProps> = ({
  isPlaying,
  onToggleMusic,
}) => {
  // Precious moments real image upload state
  const [preciousPhoto, setPreciousPhoto] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("suada_ameen_nikah_precious_photo");
      if (saved) {
        setPreciousPhoto(saved);
      }
    } catch {
      // LocalStorage fallback
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setPreciousPhoto(result);
      try {
        localStorage.setItem("suada_ameen_nikah_precious_photo", result);
      } catch {
        // quota limit fallback
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhoto = () => {
    setPreciousPhoto(null);
    try {
      localStorage.removeItem("suada_ameen_nikah_precious_photo");
    } catch {
      // no-op
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const displayImageSrc = preciousPhoto || "./assets/images/scene_couple.jpg";

  return (
    <section
      id="scene-10"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-16 px-3 sm:px-6 bg-gradient-to-b from-[#FCFAF6] via-[#EDF5F1] to-[#FCFAF6] overflow-hidden"
    >
      {/* Lanterns on card flanks */}
      <div className="absolute top-4 left-4 z-10 hidden md:block">
        <BrassLantern size="md" chainLength={40} />
      </div>
      <div className="absolute top-4 right-4 z-10 hidden md:block">
        <BrassLantern size="md" chainLength={40} />
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
        {/* Monogram */}
        <div className="mb-2">
          <BackgroundMonogram size="sm" subtle />
        </div>

        <span className="font-['Cinzel'] text-xs tracking-[0.3em] uppercase text-[#C5A059] font-bold mb-1">
          Save the Date
        </span>
        <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#08281E] tracking-wider mb-6">
          The Wedding of Ameen & Suada
        </h2>
      </div>

      {/* Main Luxury Emerald & Antique Gold Invitation Card */}
      <div className="relative w-full max-w-[520px] mx-auto rounded-[36px] bg-[#FFFDF9] border-2 border-[#C5A059]/60 shadow-[0_20px_60px_rgba(13,71,54,0.22)] p-5 sm:p-8 text-center overflow-hidden">
        {/* Ornate Arch Inner Borders */}
        <div className="absolute inset-2 sm:inset-3 border border-[#C5A059]/35 rounded-[30px] pointer-events-none" />
        <div className="absolute inset-3 sm:inset-4 border border-[#D1E6DC]/60 rounded-[26px] pointer-events-none" />

        {/* Golden Islamic Arch Crest Header */}
        <div className="relative flex flex-col items-center pt-2 sm:pt-4">
          <div className="text-xl sm:text-2xl mb-1 text-[#C5A059] animate-pulse">
            🌙
          </div>

          <BismillahCalligraphy size="md" />

          {/* Invitation Opening */}
          <div className="mt-4 space-y-1">
            <p className="font-['Cinzel'] text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
              With the blessings of Allah
            </p>
            <p className="font-['Cinzel'] text-[10px] sm:text-[11px] tracking-wider text-[#5C5248] uppercase">
              We joyfully invite you to celebrate the wedding of
            </p>
          </div>

          {/* Couple Names in Exquisite Flowing Typography: Ameen & Suada */}
          <div className="my-5 relative w-full">
            <h1 className="font-['Alex_Brush'] text-5xl sm:text-6xl text-[#0D4736] drop-shadow-xs select-none tracking-wide">
              Ameen
            </h1>
            <div className="flex items-center justify-center gap-3 my-1">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
              <span className="font-['Cinzel'] text-xl sm:text-2xl text-[#C5A059] font-light">
                &
              </span>
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
            </div>
            <h1 className="font-['Alex_Brush'] text-5xl sm:text-6xl text-[#0D4736] drop-shadow-xs select-none tracking-wide">
              Suada
            </h1>
          </div>

          {/* Family Lineage (Groom family first, Bride family second) */}
          <div className="space-y-1.5 text-center py-2.5 px-4 rounded-xl bg-[#EDF5F1]/80 border border-[#C5A059]/40 w-full max-w-sm">
            <p className="font-['Cinzel'] text-xs font-semibold text-[#08281E] tracking-wide">
              {WEDDING_CONFIG.groom.familyLine}
            </p>
            <p className="font-['Cinzel'] text-xs font-semibold text-[#08281E] tracking-wide">
              {WEDDING_CONFIG.bride.familyLine}
            </p>
          </div>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-2 my-4 opacity-75">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
            <span className="text-[#C5A059] text-xs">❖</span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          </div>

          {/* DUAL PROGRAMME SCHEDULE CARDS (Nikah followed by Reception) */}
          <div className="w-full space-y-3.5 my-2">
            {/* Programme 1: Nikah Ceremony Card */}
            <div className="w-full p-4 rounded-2xl bg-gradient-to-r from-[#0D4736] to-[#125441] text-white text-left shadow-md border border-[#C5A059]/60 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059] text-[#08281E] font-['Cinzel'] text-[10px] font-bold tracking-wider uppercase">
                  Programme 1
                </span>
                <span className="font-['Montserrat'] text-[11px] font-bold text-[#E8D39E] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {WEDDING_CONFIG.nikah.timeFormatted}
                </span>
              </div>

              <h4 className="font-['Cinzel'] text-base font-bold text-white mb-1">
                {WEDDING_CONFIG.nikah.title}
              </h4>

              <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20">
                <div className="flex items-center gap-1.5 text-xs text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#E8D39E] shrink-0" />
                  <span>{WEDDING_CONFIG.nikah.venueName}, {WEDDING_CONFIG.nikah.venueCity}</span>
                </div>

                <a
                  href={WEDDING_CONFIG.nikah.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-['Cinzel'] text-[#E8D39E] hover:underline"
                >
                  <span>Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Programme 2: Reception Card */}
            <div className="w-full p-4 rounded-2xl bg-gradient-to-r from-[#FCFAF6] to-[#EDF5F1] text-[#08281E] text-left shadow-sm border border-[#C5A059]/50 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#0D4736] text-white font-['Cinzel'] text-[10px] font-bold tracking-wider uppercase">
                  Programme 2
                </span>
                <span className="font-['Montserrat'] text-[11px] font-bold text-[#0D4736] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {WEDDING_CONFIG.reception.timeFormatted}
                </span>
              </div>

              <h4 className="font-['Cinzel'] text-base font-bold text-[#08281E] mb-1">
                {WEDDING_CONFIG.reception.title}
              </h4>

              <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#C5A059]/30">
                <div className="flex items-center gap-1.5 text-xs text-[#5C5248]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>{WEDDING_CONFIG.reception.venueName}, {WEDDING_CONFIG.reception.venueCity}</span>
                </div>

                <a
                  href={WEDDING_CONFIG.reception.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-['Cinzel'] text-[#0D4736] font-semibold hover:underline"
                >
                  <span>Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Live Countdown */}
          <div className="mt-5 w-full">
            <p className="font-['Cinzel'] text-[10px] tracking-widest text-[#0D4736] uppercase mb-2 font-semibold">
              Countdown to the Blessed Wedding
            </p>
            <CountdownTimer />
          </div>

          {/* Precious Moments Interactive Photo Card */}
          <div className="mt-5 w-full">
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="w-full rounded-2xl overflow-hidden border-2 border-[#C5A059]/60 shadow-md relative group cursor-pointer bg-[#EDF5F1]"
            >
              <img
                src={displayImageSrc}
                alt="Ameen & Suada Precious Moment"
                className="w-full h-64 object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3 text-left">
                <p className="font-['Cormorant_Garamond'] italic text-white text-xs sm:text-sm drop-shadow-md">
                  "Your presence and duas will make this occasion even more special."
                </p>
                {preciousPhoto && (
                  <span className="font-['Cinzel'] text-[9px] tracking-widest uppercase text-[#E8D39E] mt-1 font-semibold">
                    ✦ Precious Moment Photo
                  </span>
                )}
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs text-white flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Upload Controls */}
            <div className="mt-2.5 flex items-center justify-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
                id="precious-photo-upload"
              />
              <label
                htmlFor="precious-photo-upload"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0D4736] hover:bg-[#125441] text-white text-xs font-['Cinzel'] font-semibold tracking-wider cursor-pointer shadow-xs transition-all hover:scale-105 border border-[#C5A059]/40"
              >
                <Camera className="w-3.5 h-3.5 text-[#E8D39E]" />
                <span>Upload Precious Photo</span>
              </label>

              {preciousPhoto && (
                <button
                  type="button"
                  onClick={handleResetPhoto}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-white border border-[#C5A059]/50 text-[#5C5248] text-[11px] font-['Cinzel'] hover:bg-gray-50 transition-colors"
                >
                  <RefreshCw className="w-3 h-3 text-[#0D4736]" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Official Closing Message */}
          <div className="mt-4 px-4 py-2.5 rounded-xl bg-[#EDF5F1]/80 border border-[#C5A059]/40">
            <p className="font-['Cormorant_Garamond'] italic text-base sm:text-lg text-[#0D4736] font-semibold leading-relaxed">
              "Your presence and duas will make this occasion even more special."
            </p>
          </div>

          {/* Action Buttons Bar */}
          <div className="mt-6 w-full">
            <ActionButtons />
          </div>

          {/* Audio Player Card */}
          <div className="mt-5 w-full">
            <AudioPlayerCard isPlaying={isPlaying} onToggle={onToggleMusic} />
          </div>
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            type="button"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 backdrop-blur-md"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={displayImageSrc}
            alt="Ameen & Suada Precious Moment Fullscreen"
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-white/80 font-['Cinzel'] text-xs tracking-widest mt-4">
            Ameen & Suada • Sunday, 8 November 2026
          </p>
        </div>
      )}
    </section>
  );
};
