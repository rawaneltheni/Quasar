<template>
  <q-layout view="hHh lpR fFf">
    <!-- HEADER -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Quasar Shop </q-toolbar-title>

        <q-space />

        <!-- THEME TOGGLE -->
        <q-btn-toggle
          v-model="theme"
          dense
          flat
          toggle-color="yellow"
          :options="[
            { label: '🌞', value: 'light' },
            { label: '🌙', value: 'dark' },
          ]"
        />

        <q-btn flat label="Login" icon="login" @click="goToLogin" />
      </q-toolbar>

      <!-- NAV TABS -->
      <q-tabs align="center">
        <q-route-tab to="/index" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <!-- PAGE CONTENT -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- FOOTER -->
    <!-- <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>© 2026 Quasar Shop</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const router = useRouter();
const $q = useQuasar();

/* -----------------------------
   ROUTING
------------------------------ */
const goToLogin = () => {
  void router.push('/auth');
};

/* -----------------------------
   DARK MODE
------------------------------ */
const theme = ref<'light' | 'dark'>($q.dark.isActive ? 'dark' : 'light');

watch(theme, (val) => {
  $q.dark.set(val === 'dark');
  localStorage.setItem('theme', val);
});

// Restore theme on reload
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || savedTheme === 'light') {
  theme.value = savedTheme;
}
</script>

<style>
/* Light mode (Quasar default handles most styling) */
.body--light {
  background-color: #ffffff;
  color: #1d1d1d;
}

/* Dark mode */
.body--dark {
  background-color: #121212;
  color: #e0e0e0;
}
</style>
