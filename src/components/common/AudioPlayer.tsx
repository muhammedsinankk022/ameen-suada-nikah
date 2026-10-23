import React, { useState } from "react";
import { Music, Volume2, VolumeX, Pause, Play, Sliders } from "lucide-react";
import { WEDDING_CONFIG } from "../../config/wedding.config";

interface AudioPlayerCardProps {
  isPlaying: boolean;
  onToggle: () => void;
  className?: string;
}

export const AudioPlayerCard: React.FC<AudioPlayerCardProps> = ({
  isPlaying,
  onToggle,
  className = "",
}) => {
  return (
    <div
      className={`w-full max-w-md mx-auto p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[#C5A059]/40 shadow-[0_8px_24px_rgba(13,71,54,0.12)] flex items-center justify-between gap-4 transition-all hover:bg-white/95 ${className}`}
    >
      <div className="flex items-center gap-3.5">
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
            isPlaying
              ? "bg-[#0D4736] text-white shadow-md shadow-[#0D4736]/30"
              : "bg-[#D1E6DC] text-[#0D4736]"
          }`}
        >
          <Music className={`w-5 h-5 ${isPlaying ? "animate-pulse" : ""}`} />
        </div>
        <div className="text-left">
          <p className="font-['Cinzel'] text-xs md:text-sm font-semibold tracking-wider text-[#08281E]">
            {WEDDING_CONFIG.audio.title}
          </p>
          <p className="font-['Montserrat'] text-[11px] text-[#5C5248] mt-0.5">
            {WEDDING_CONFIG.audio.subtitle}
          </p>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        type="button"
        role="switch"
        aria-checked={isPlaying}
        aria-label="Toggle Wedding Nasheed"
        className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50 ${
          isPlaying ? "bg-[#0D4736]" : "bg-[#C5A059]/40"
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
            isPlaying ? "translate-x-6 text-[#0D4736]" : "translate-x-0 text-[#5C5248]"
          }`}
        >
          {isPlaying ? (
            <Pause className="w-3 h-3 text-[#0D4736]" />
          ) : (
            <Play className="w-3 h-3 fill-current ml-0.5 text-[#5C5248]" />
          )}
        </div>
      </button>
    </div>
  );
};

interface FloatingAudioButtonProps {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  onToggle: () => void;
  onMuteToggle: () => void;
  onVolumeChange: (vol: number) => void;
}

export const FloatingAudioButton: React.FC<FloatingAudioButtonProps> = ({
  isPlaying,
  isMuted,
  volume,
  onToggle,
  onMuteToggle,
  onVolumeChange,
}) => {
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex items-center gap-2">
      {/* Volume Slider Popout */}
      {showVolumeSlider && isPlaying && (
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#C5A059]/50 shadow-xl animate-fade-in">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            aria-label="Volume slider"
            className="w-20 h-1.5 accent-[#0D4736] cursor-pointer"
          />
          <span className="font-['Montserrat'] text-[10px] text-[#08281E] font-medium w-6">
            {Math.round((isMuted ? 0 : volume) * 100)}%
          </span>
        </div>
      )}

      {/* Volume & Mute Controls (shown when playing) */}
      {isPlaying && (
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowVolumeSlider(!showVolumeSlider)}
            type="button"
            aria-label="Adjust volume"
            className={`w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#C5A059]/40 shadow-lg flex items-center justify-center transition-all ${
              showVolumeSlider ? "text-[#0D4736] border-[#0D4736]" : "text-[#08281E]"
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onMuteToggle}
            type="button"
            aria-label={isMuted ? "Unmute" : "Mute"}
            className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#C5A059]/40 text-[#08281E] shadow-lg flex items-center justify-center hover:bg-white transition-all transform hover:scale-105"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-emerald-800" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#0D4736]" />
            )}
          </button>
        </div>
      )}

      {/* Main Play / Pause Button with Official Label */}
      <button
        onClick={onToggle}
        type="button"
        aria-label={isPlaying ? "Pause Wedding Nasheed (Muffled)" : "Play Wedding Nasheed (Muffled)"}
        className={`px-3.5 py-2.5 rounded-full backdrop-blur-md border border-[#C5A059]/60 shadow-xl flex items-center gap-2 transition-all transform hover:scale-105 ${
          isPlaying
            ? "bg-[#0D4736] text-white"
            : "bg-[#FCFAF6]/95 text-[#08281E] hover:bg-[#FCFAF6]"
        }`}
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          )}
        </div>
        <div className="flex flex-col text-left">
          <span className="font-['Cinzel'] text-[11px] font-bold tracking-wider leading-tight">
            {isPlaying ? "PAUSE" : "PLAY"}
          </span>
          <span className="font-['Montserrat'] text-[9px] opacity-80 leading-tight">
            Wedding Nasheed (Muffled)
          </span>
        </div>
      </button>
    </div>
  );
};
