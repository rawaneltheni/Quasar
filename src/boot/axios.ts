import { defineBoot } from '#q-app/wrappers';
import axios, { type AxiosInstance } from 'axios';

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

// CREATE CUSTOME APIS
const prayerAPI = axios.create({
  baseURL: 'https://api.aladhan.com/v1',
});

const kanyeAPI = axios.create({
  baseURL: 'https://api.kanye.rest/',
});

// EXPORT AND ACCESS THEM GLOBALY
export default defineBoot(({ app }: any) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$prayerAPI = prayerAPI;
  app.config.globalProperties.$kanyeAPI = kanyeAPI;
});

export { prayerAPI, kanyeAPI };
