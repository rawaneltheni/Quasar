import { defineBoot } from '#q-app/wrappers';
import { createPinia } from 'pinia';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default defineBoot(({ app }: any) => {
  const pinia = createPinia();
  app.use(pinia);
});
