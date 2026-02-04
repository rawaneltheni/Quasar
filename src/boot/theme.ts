// boot/theme.ts
import { useThemeStore } from 'src/stores/theme-store.js';
export default () => {
  const theme = useThemeStore();
  theme.init();
};
