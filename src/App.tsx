import { useState } from "react";
import { FloatingPetals } from "./components/common/FloatingPetals";
import { FloatingAudioButton } from "./components/common/AudioPlayer";
import { ProgressBar } from "./components/navigation/ProgressBar";
import { TopNav } from "./components/navigation/TopNav";
import { Scene2MosqueArrival } from "./components/scenes/Scene2MosqueArrival";
import { Scene5BrideAndGroom } from "./components/scenes/Scene5BrideAndGroom";
import { Footer } from "./components/finale/Footer";
import { useAudioEngine } from "./hooks/useAudioEngine";
import { useScrollJourney } from "./hooks/useScrollJourney";

export function App() {
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  const {
    isPlaying,
    isMuted,
    volume,
    toggleMusic,
    toggleMute,
    setVolume,
  } = useAudioEngine();

  const { jumpToScene } = useScrollJourney(reducedMotion);

  return (
    <div className="relative min-h-screen bg-[#FCFAF6] text-[#08281E] selection:bg-[#D1E6DC] selection:text-[#08281E] overflow-x-hidden font-['Montserrat']">
      {/* Scroll Progress Bar */}
      <ProgressBar />

      {/* Floating Canvas Rose Petals & Golden Sparkles */}
      {!reducedMotion && <FloatingPetals petalCount={25} sparkleCount={30} />}

      {/* Top Navigation Bar with Chapters & Controls */}
      <TopNav
        isPlaying={isPlaying}
        onToggleMusic={toggleMusic}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion(!reducedMotion)}
        onJumpToScene={jumpToScene}
      />

      {/* Persistent Floating Audio Toggle Button */}
      <FloatingAudioButton
        isPlaying={isPlaying}
        isMuted={isMuted}
        volume={volume}
        onToggle={toggleMusic}
        onMuteToggle={toggleMute}
        onVolumeChange={setVolume}
      />

      {/* Main Wedding Invitation: Two Visual Sections Only */}
      <main className="relative w-full">
        {/* Section 1 — Mosque (Nikah Ceremony & Reception Announcement) */}
        <Scene2MosqueArrival onScrollToNext={() => jumpToScene("scene-characters")} />

        {/* Section 2 — Wedding Characters (Ameen & Suada) */}
        <Scene5BrideAndGroom />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
