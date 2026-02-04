import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';

export const useI18nStore = defineStore('i18n', {
  state: () => ({
    // store the locale code as string, fallback to 'en-US'
    lang: (LocalStorage.getItem<string>('locale') as string) ?? 'en-US',
  }),

  getters: {
    current(state) {
      return state.lang;
    },
  },

  actions: {
    setLocale(locale: string) {
      this.lang = locale;
      LocalStorage.set('locale', locale);
    },
  },
});
