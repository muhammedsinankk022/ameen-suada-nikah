import React, { useState } from "react";
import { MapPin, Calendar, Share2, Check, Copy } from "lucide-react";
import { WEDDING_CONFIG } from "../../config/wedding.config";

export const ActionButtons: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [showCalendarModal, setShowCalendarModal] = useState<boolean>(false);

  // Download .ics calendar file for both events
  const downloadIcsFile = (eventType: "nikah" | "reception" | "full") => {
    let summary = "Wedding: Ameen & Suada";
    let dtStart = "20261108T050000Z"; // 10:30 AM IST = 05:00 UTC
    let dtEnd = "20261108T100000Z";   // 03:30 PM IST = 10:00 UTC
    let location = "Masjidul Noor, Pallippadi & Shubham Auditorium, Elamkulam";
    let description = `With the blessings of Allah, you are joyfully invited to the Wedding of Ameen & Suada.\\n\\nProgramme 1: Nikah Ceremony at 10:30 AM at Masjidul Noor, Pallippadi\\nProgramme 2: Reception at 12:00 PM at Shubham Auditorium, Elamkulam\\n\\n${WEDDING_CONFIG.groom.familyLine}\\n${WEDDING_CONFIG.bride.familyLine}`;

    if (eventType === "nikah") {
      summary = "Nikah Ceremony: Ameen & Suada";
      dtStart = "20261108T050000Z"; // 10:30 AM IST
      dtEnd = "20261108T063000Z";   // 12:00 PM IST
      location = "Masjidul Noor, Pallippadi, Kerala";
      description = `Nikah Ceremony of Ameen & Suada at 10:30 AM IST at Masjidul Noor, Pallippadi.\\n\\n${WEDDING_CONFIG.groom.familyLine}\\n${WEDDING_CONFIG.bride.familyLine}`;
    } else if (eventType === "reception") {
      summary = "Wedding Reception: Ameen & Suada";
      dtStart = "20261108T063000Z"; // 12:00 PM IST
      dtEnd = "20261108T100000Z";   // 03:30 PM IST
      location = "Shubham Auditorium, Elamkulam, Kerala";
      description = `Wedding Reception of Ameen & Suada at 12:00 PM IST at Shubham Auditorium, Elamkulam.\\n\\n${WEDDING_CONFIG.groom.familyLine}\\n${WEDDING_CONFIG.bride.familyLine}`;
    }

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Ameen & Suada Wedding//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:ameen-suada-${eventType}-20261108@wedding`,
      "DTSTAMP:20261023T000000Z",
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `SUMMARY:${summary}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `ameen-suada-${eventType}-wedding.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setShowCalendarModal(false);
  };

  // Google Calendar URL (Full Wedding Day)
  const googleCalendarUrl = (type: "nikah" | "reception") => {
    if (type === "nikah") {
      const title = encodeURIComponent("Nikah Ceremony: Ameen & Suada");
      const details = encodeURIComponent(
        `Nikah Ceremony of Ameen & Suada\nTime: 10:30 AM IST\nVenue: Masjidul Noor, Pallippadi\n\n${WEDDING_CONFIG.groom.familyLine}\n${WEDDING_CONFIG.bride.familyLine}\n\nYour presence and duas will make this occasion even more special.`
      );
      const location = encodeURIComponent("Masjidul Noor, Pallippadi, Kerala");
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261108T050000Z/20261108T063000Z&details=${details}&location=${location}`;
    } else {
      const title = encodeURIComponent("Wedding Reception: Ameen & Suada");
      const details = encodeURIComponent(
        `Wedding Reception of Ameen & Suada\nTime: 12:00 PM IST\nVenue: Shubham Auditorium, Elamkulam\n\n${WEDDING_CONFIG.groom.familyLine}\n${WEDDING_CONFIG.bride.familyLine}\n\nYour presence and duas will make this occasion even more special.`
      );
      const location = encodeURIComponent("Shubham Auditorium, Elamkulam, Kerala");
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261108T063000Z/20261108T100000Z&details=${details}&location=${location}`;
    }
  };

  // Share Invitation Link
  const handleShare = async () => {
    const shareData = {
      title: "Ameen & Suada — Nikah & Reception Invitation",
      text: "You are cordially invited to the Wedding of Ameen & Suada on Sunday, 8 November 2026. Programme 1: Nikah Ceremony at 10:30 AM (Masjidul Noor, Pallippadi) • Programme 2: Reception at 12:00 PM (Shubham Auditorium, Elamkulam).",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      {/* Dual Maps Buttons + Calendar + Share */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
        {/* 1. Mosque Map */}
        <a
          href={WEDDING_CONFIG.nikah.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#C5A059]/60 hover:bg-[#EDF5F1] shadow-xs transition-all text-[#08281E]"
        >
          <MapPin className="w-3.5 h-3.5 text-[#0D4736] shrink-0" />
          <span className="font-['Cinzel'] text-[11px] font-bold tracking-wider">
            Mosque Map
          </span>
        </a>

        {/* 2. Auditorium Map */}
        <a
          href={WEDDING_CONFIG.reception.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#C5A059]/60 hover:bg-[#EDF5F1] shadow-xs transition-all text-[#08281E]"
        >
          <MapPin className="w-3.5 h-3.5 text-[#0D4736] shrink-0" />
          <span className="font-['Cinzel'] text-[11px] font-bold tracking-wider">
            Auditorium Map
          </span>
        </a>

        {/* 3. Add to Calendar */}
        <button
          onClick={() => setShowCalendarModal(true)}
          type="button"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#C5A059]/60 hover:bg-[#EDF5F1] shadow-xs transition-all text-[#08281E] cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#0D4736] shrink-0" />
          <span className="font-['Cinzel'] text-[11px] font-bold tracking-wider">
            Add to Calendar
          </span>
        </button>

        {/* 4. Share Invitation */}
        <button
          onClick={handleShare}
          type="button"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0D4736] hover:bg-[#125441] text-white shadow-md transition-all cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#E8D39E]" />
              <span className="font-['Cinzel'] text-[11px] font-bold tracking-wider">
                Copied!
              </span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-[#E8D39E] shrink-0" />
              <span className="font-['Cinzel'] text-[11px] font-bold tracking-wider">
                Share Invite
              </span>
            </>
          )}
        </button>
      </div>

      {/* Copy link quick trigger */}
      <button
        onClick={copyToClipboard}
        type="button"
        className="inline-flex items-center gap-1.5 text-[11px] font-['Montserrat'] text-[#5C5248] hover:text-[#0D4736] transition-colors pt-1 cursor-pointer"
      >
        <Copy className="w-3 h-3 text-[#C5A059]" />
        <span>{copied ? "Invitation link copied to clipboard!" : "Or tap here to copy link"}</span>
      </button>

      {/* Calendar Modal with both options */}
      {showCalendarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-3xl bg-[#FFFDF9] border-2 border-[#C5A059] p-6 text-center shadow-2xl relative animate-scale-up">
            <h3 className="font-['Cinzel'] text-lg font-bold text-[#0D4736] mb-1">
              Add to Calendar
            </h3>
            <p className="font-['Montserrat'] text-xs text-[#5C5248] mb-5">
              Select which programme you'd like to save to your personal calendar:
            </p>

            <div className="space-y-2.5">
              <a
                href={googleCalendarUrl("nikah")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowCalendarModal(false)}
                className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-white border border-[#C5A059]/40 hover:bg-[#EDF5F1] text-[#08281E] font-['Cinzel'] text-xs font-semibold"
              >
                <span>🕌 10:30 AM Nikah (Google Calendar)</span>
              </a>

              <a
                href={googleCalendarUrl("reception")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowCalendarModal(false)}
                className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-white border border-[#C5A059]/40 hover:bg-[#EDF5F1] text-[#08281E] font-['Cinzel'] text-xs font-semibold"
              >
                <span>🎉 12:00 PM Reception (Google Calendar)</span>
              </a>

              <button
                onClick={() => downloadIcsFile("full")}
                type="button"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0D4736] text-white font-['Cinzel'] text-xs font-semibold hover:bg-[#125441] transition-all shadow-md cursor-pointer"
              >
                <span>🍏 Full Wedding Day (.ics Apple / Outlook)</span>
              </button>
            </div>

            <button
              onClick={() => setShowCalendarModal(false)}
              type="button"
              className="mt-4 text-xs text-[#5C5248] hover:text-[#08281E] underline font-['Montserrat']"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
