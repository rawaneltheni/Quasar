declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}
declare module '#q-app/wrappers' {
  export * from '@quasar/app-vite';
  export { defineConfig, defineBoot, defineRouter, defineStore } from '#q-app/wrappers';
}
