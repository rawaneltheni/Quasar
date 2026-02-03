import { promises } from 'dns';
import type { PrayerTimes } from 'src/models/prayer-times-models.js';
import API from './API.js';

const prayerAPI = API('https://api.aladhan.com/v1');

export default {
  getPrayerTime(city: string, country: string): Promise<PrayerTimes> {
    return prayerAPI.get(`/timingsByCity?city=${city}&country=${country}`);
  },
  async getPrayerName(city: string, country: string) {
    const response = await this.getPrayerTime(city, country);
    return Object.keys(response);
  },
};
