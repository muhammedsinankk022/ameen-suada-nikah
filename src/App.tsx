import { useState } from "react";
import confetti from "canvas-confetti";
import { FloatingPetals } from "./components/common/FloatingPetals";
import { FloatingAudioButton } from "./components/common/AudioPlayer";
import { ProgressBar } from "./components/navigation/ProgressBar";
import { TopNav } from "./components/navigation/TopNav";
import { Scene1Opening } from "./components/scenes/Scene1Opening";
import { Scene2MosqueArrival } from "./components/scenes/Scene2MosqueArrival";
import { Scene3NikahGathering } from "./components/scenes/Scene3NikahGathering";
import { Scene4FamilyBlessings } from "./components/scenes/Scene4FamilyBlessings";
import { Scene5NikahInfo } from "./components/scenes/Scene5NikahInfo";
import { Scene7Auditorium } from "./components/scenes/Scene7Auditorium";
import { Scene5BrideAndGroom } from "./components/scenes/Scene5BrideAndGroom";
import { Scene6RingCeremony } from "./components/scenes/Scene6RingCeremony";
import { Scene8FamilyPhotos } from "./components/scenes/Scene8FamilyPhotos";
import { Scene10InvitationCard } from "./components/scenes/Scene10InvitationCard";
import { Scene9GuestMemories } from "./components/scenes/Scene9GuestMemories";
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
    startMusic,
  } = useAudioEngine();

  const { jumpToScene } = useScrollJourney(reducedMotion);

  // When guest clicks "Enter the Wedding Story" in Scene 1
  const handleEnterStory = () => {
    // Immediately initiate music playback on explicit user action
    if (!isPlaying) {
      startMusic();
    }

    // Trigger subtle emerald/golden sparkle burst
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#0D4736", "#C5A059", "#FCFAF6", "#125441"],
    });

    // Smoothly travel to Scene 2 (Mosque Arrival)
    jumpToScene("scene-2");
  };

  return (
    <div className="relative min-h-screen bg-[#FCFAF6] text-[#08281E] selection:bg-[#D1E6DC] selection:text-[#08281E] overflow-x-hidden font-['Montserrat']">
      {/* Scroll Progress Bar */}
      <ProgressBar />

      {/* Floating Canvas Rose Petals & Golden Sparkles */}
      {!reducedMotion && <FloatingPetals petalCount={30} sparkleCount={35} />}

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

      {/* Nikah & Reception Cinematic Scroll Journey */}
      <main className="relative w-full">
        {/* Scene 1 — The Opening: S ♥ A (Emerald & Gold) */}
        <Scene1Opening onEnterStory={handleEnterStory} />

        {/* Scene 2 — Guests arriving at the mosque (Masjidul Noor, Pallippadi) */}
        <Scene2MosqueArrival />

        {/* Scene 3 — Respectful illustrated Nikah gathering (10:30 AM) */}
        <Scene3NikahGathering />

        {/* Scene 4 — Family greetings, blessings, and duas */}
        <Scene4FamilyBlessings />

        {/* Scene 5 — Clear 10:30 AM Nikah information scene with mosque directions */}
        <Scene5NikahInfo />

        {/* Scene 6 — Transitioning from the mosque to the auditorium */}
        <Scene7Auditorium />

        {/* Scene 7 — The Bride & Groom together */}
        <Scene5BrideAndGroom />

        {/* Scene 8 — The celebratory family moments & ring ceremony */}
        <Scene6RingCeremony />

        {/* Scene 9 — Family photographs & memory album */}
        <Scene8FamilyPhotos onTransitionToGuestGallery={() => jumpToScene("scene-9")} />

        {/* Scene 10 — Final Emerald-Green & Gold Save the Date reveal (Dual Programmes) */}
        <Scene10InvitationCard
          isPlaying={isPlaying}
          onToggleMusic={toggleMusic}
          onOpenGuestMemories={() => jumpToScene("scene-9")}
        />

        {/* Scene 11 — Guest Memories photo gallery */}
        <Scene9GuestMemories />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
