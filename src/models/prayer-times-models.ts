interface PrayerTimings {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface PrayerApiResponse {
  timings: PrayerTimings;
}

export type { PrayerApiResponse };
