import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia';
import { markRaw } from 'vue';

export default boot(({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
});
