import { defineBoot } from '#q-app/wrappers';
import { createI18n } from 'vue-i18n';
import { LocalStorage } from 'quasar';

import messages from '../i18n/index.js';

export type MessageLanguages = keyof typeof messages;
// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = (typeof messages)['en-US'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-object-type */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default defineBoot(({ app }: any) => {
  // Read saved locale from LocalStorage (fallback to en-US)
  const savedLocale = (LocalStorage.getItem<string>('locale') as string) ?? 'en-US';

  const i18n = createI18n<{ message: MessageSchema }, MessageLanguages>({
    locale: savedLocale,
    legacy: false,
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});
