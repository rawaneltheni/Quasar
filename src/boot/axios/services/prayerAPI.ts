import { PrayerApiResponse } from 'src/models/prayer-times-models';
import { prayerAPI } from '../../axios';

// This function returns the full response. we only need the pure data
// export function getPrayerTime(city: string, country: string): Promise<PrayerTimes> {
//   return prayerAPI.get(`/timingsByCity?city=${city}&country=${country}`);
// }

export async function getPrayerTime(city: string, country: string): Promise<PrayerApiResponse> {
  const response = await prayerAPI.get(`/timingsByCity?city=${city}&country=${country}`);
  return response.data.data;
}
