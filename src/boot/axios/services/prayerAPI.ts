import { PrayerTimes } from 'src/models/prayer-times-models.js';
import { prayerAPI } from '../axios.js';

export function getPrayerTime(city: string, country: string): Promise<PrayerTimes> {
  return prayerAPI.get(`/timingsByCity?city=${city}&country=${country}`);
}
