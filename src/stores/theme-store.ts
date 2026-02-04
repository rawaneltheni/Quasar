import { defineStore } from 'pinia';
import { Dark, LocalStorage } from 'quasar';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    dark: LocalStorage.getItem<boolean>('darkMode') ?? false,
  }),

  actions: {
    toggle() {
      this.dark = !this.dark;
      Dark.set(this.dark);
      LocalStorage.set('darkMode', this.dark);
    },

    setDark(value: boolean) {
      this.dark = value;
      Dark.set(value);
      LocalStorage.set('darkMode', value);
    },

    init() {
      Dark.set(this.dark);
    },
  },
});
