<template>
  <q-layout view="hHh lpR fFf">
    <div class="header">
      <div class="q-search">
        <input type="text" placeholder="Search for something ... " />
      </div>
      <q-space />

      <q-btn flat label="Logout" icon="login" @click="handleLogout" />
    </div>

    <div class="nav">
      <div class="nav-logo">Admin Dashboard</div>
      <div class="nav-title">MENU</div>
      <div class="nav-lin">
        <a href="#">Home</a>
        <a href="#">Reports</a>
        <a href="#">Calendar</a>
        <a href="#">Settings</a>
      </div>
    </div>
    <!-- <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Admin Dashboard </q-toolbar-title>
      </q-toolbar>
    </q-header> -->

    <!-- <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="footer">All rights reversed.</div>
    <!-- <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>

<script setup lang="js">
import { useAuthStore } from 'src/stores/auth-store';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const router = useRouter();
const auth = useAuthStore();

async function handleLogout() {
  auth.logout();

  $q.notify({
    type: 'positive',
    message: 'Logged out successfully',
  });

  await router.push('/auth');
}

// import { ref } from 'vue';

// export default {
//   setup() {
//     const leftDrawerOpen = ref(false);

//     return {
//       leftDrawerOpen,
//       toggleLeftDrawer() {
//         leftDrawerOpen.value = !leftDrawerOpen.value;
//       },
//     };
//   },
// };
</script>
