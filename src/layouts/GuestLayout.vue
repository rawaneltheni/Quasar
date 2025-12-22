<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title> Quasar Shop </q-toolbar-title>
      </q-toolbar>
      <q-space />

      <q-btn flat label="Login" icon="login" @click="goToLogin" />
      <q-tabs align="center">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  void router.push('/auth');
};
</script>

<style></style>
