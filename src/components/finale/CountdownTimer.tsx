import React, { useEffect, useState } from "react";
import { WEDDING_CONFIG } from "../../config/wedding.config";
import type { CountdownState } from "../../types";

export const CountdownTimer: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    // Count down to Nikah ceremony (10:30 AM IST)
    const targetTime = new Date(WEDDING_CONFIG.nikah.targetDateIso).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = targetTime - now;

      if (diff <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
        isPast: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "DAYS", value: countdown.days },
    { label: "HOURS", value: countdown.hours },
    { label: "MINS", value: countdown.minutes },
    { label: "SECS", value: countdown.seconds },
  ];

  return (
    <div className={`w-full max-w-sm mx-auto ${className}`}>
      <div className="grid grid-cols-4 gap-2">
        {timeBlocks.map((block, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-gradient-to-b from-[#0D4736] to-[#08281E] border border-[#C5A059]/60 shadow-md text-white transition-transform transform hover:-translate-y-0.5"
          >
            <span className="font-['Cinzel'] text-xl sm:text-2xl font-bold tracking-tight text-[#E8D39E]">
              {String(block.value).padStart(2, "0")}
            </span>
            <span className="font-['Montserrat'] text-[9px] font-semibold tracking-wider text-white/80 mt-0.5">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
