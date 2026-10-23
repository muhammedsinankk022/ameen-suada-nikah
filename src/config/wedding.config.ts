// ============================================================================
// AMEEN & SUADA — NIKAH & RECEPTION OFFICIAL CONFIGURATION
// Website 2: Mosque Nikah (10:30 AM, Masjidul Noor) & Reception (12:00 PM, Shubham Auditorium)
// Theme: Majestic Emerald Green, Warm Ivory, & Antique Gold
// ============================================================================

export interface ProgrammeEvent {
  title: string;
  badge: string;
  timeFormatted: string;
  venueName: string;
  venueCity: string;
  venueAddress: string;
  googleMapsUrl: string;
  targetDateIso: string;
}

export interface WeddingConfig {
  couple: {
    title: string;
    monogram: string;
    firstInitial: string;
    secondInitial: string;
  };
  groom: {
    name: string;
    father: string;
    mother: string;
    familyLine: string;
  };
  bride: {
    name: string;
    father: string;
    mother: string;
    familyLine: string;
  };
  nikah: ProgrammeEvent;
  reception: ProgrammeEvent;
  eventDate: {
    dateFormatted: string;
    dayFormatted: string;
    dayNumber: string;
    monthYear: string;
    timezone: string;
  };
  creator: {
    name: string;
    credit: string;
    phone: string;
    whatsappUrl: string;
  };
  features: {
    enableRingCeremony: boolean;
    enableAudioAutoplayPrompt: boolean;
    adminModerationPin: string;
    maxUploadPhotosCount: number;
    maxUploadFileSizeMb: number;
  };
  supabase: {
    url: string;
    anonKey: string;
    storageBucket: string;
    tableName: string;
  };
  audio: {
    title: string;
    subtitle: string;
    defaultTrackUrl: string;
    lowpassCutoffHz: number;
    defaultVolume: number;
  };
}

export const WEDDING_CONFIG: WeddingConfig = {
  couple: {
    title: "Ameen & Suada",
    monogram: "A ♥ S",
    firstInitial: "A",
    secondInitial: "S",
  },
  groom: {
    name: "Ameen",
    father: "Umer Korakkalikkuth",
    mother: "Fathimath Suhara",
    familyLine: "S/o Mr. Umer Korakkalikkuth & Mrs. Fathimath Suhara",
  },
  bride: {
    name: "Suada",
    father: "Mustafa Maraparambil",
    mother: "Thasleena",
    familyLine: "D/o Mustafa Maraparambil & Mrs. Thasleena",
  },
  nikah: {
    title: "Nikah Ceremony",
    badge: "PROGRAMME 1 • NIKAH",
    timeFormatted: "10:30 AM IST",
    venueName: "Masjidul Noor",
    venueCity: "Pallippadi",
    venueAddress: "Masjidul Noor, Pallippadi, Malappuram, Kerala, India",
    googleMapsUrl: "https://maps.google.com/?q=Masjidul+Noor+Pallippadi",
    targetDateIso: "2026-11-08T10:30:00+05:30",
  },
  reception: {
    title: "Wedding Reception",
    badge: "PROGRAMME 2 • RECEPTION",
    timeFormatted: "12:00 PM IST",
    venueName: "Shubham Auditorium",
    venueCity: "Elamkulam",
    venueAddress: "Shubham Auditorium, Elamkulam, Kerala, India",
    googleMapsUrl: "https://maps.app.goo.gl/yPGhBjin3nAw1gLw9",
    targetDateIso: "2026-11-08T12:00:00+05:30",
  },
  eventDate: {
    dateFormatted: "08 NOVEMBER 2026",
    dayFormatted: "SUNDAY",
    dayNumber: "08",
    monthYear: "NOVEMBER 2026",
    timezone: "Asia/Kolkata",
  },
  creator: {
    name: "Muhammad Sinan KK",
    credit: "Website crafted with love by Muhammad Sinan KK",
    phone: "9645956291",
    whatsappUrl: "https://wa.me/919645956291",
  },
  features: {
    enableRingCeremony: true,
    enableAudioAutoplayPrompt: false,
    adminModerationPin: "2026",
    maxUploadPhotosCount: 10,
    maxUploadFileSizeMb: 15,
  },
  supabase: {
    url: (import.meta as unknown as { env: Record<string, string> }).env?.VITE_SUPABASE_URL || "",
    anonKey: (import.meta as unknown as { env: Record<string, string> }).env?.VITE_SUPABASE_ANON_KEY || "",
    storageBucket: "nikah-guest-photos",
    tableName: "nikah_photos",
  },
  audio: {
    title: "Wedding Nasheed (Muffled)",
    subtitle: "Gentle acoustic nasheed with softened warmth",
    defaultTrackUrl: "./assets/audio/nasheed.mp3",
    lowpassCutoffHz: 1100,
    defaultVolume: 0.65,
  },
};
