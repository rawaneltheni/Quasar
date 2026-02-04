<template>
  <q-layout view="lHh Lpr fFf">
    <!-- Sidebar -->
    <q-drawer show-if-above side="left" width="260" class="bg-sidebar">
      <div class="q-pa-md column fit">
        <!-- Title -->
        <div class="text-h6 q-mb-lg">Admin Dashboard</div>

        <!-- Menu -->
        <div>
          <div class="text-caption text-muted q-mb-sm">MENU</div>

          <q-list dense>
            <q-item clickable v-ripple to="/admin">
              <q-item-section>Overview</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/products">
              <q-item-section>Products</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/reports">
              <q-item-section>Reports</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/calendar">
              <q-item-section>Calendar</q-item-section>
            </q-item>
          </q-list>
        </div>

        <q-space />

        <!-- General -->
        <q-separator class="q-my-md" />

        <div>
          <div class="text-caption text-muted q-mb-sm">GENERAL</div>

          <q-list dense>
            <q-item clickable v-ripple to="/admin">
              <q-item-section>Settings</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/admin">
              <q-item-section>Security</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-drawer>

    <!-- Header -->
    <q-header class="bg-header">
      <q-toolbar>
        <!-- Search -->
        <q-input dense outlined placeholder="Search for anything..." class="q-mx-md col bg-surface">
          <template #prepend>
            <q-icon name="search" />
          </template>
        </q-input>

        <!-- Logout -->
        <q-btn color="primary" label="Logout" icon="logout" class="q-ml-sm" @click="handleLogout" />

        <!-- Theme toggle -->
        <darkmode-component class="q-ml-sm" />
      </q-toolbar>
    </q-header>

    <!-- Page Content -->
    <q-page-container>
      <q-page class="q-pa-md bg-app">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useAuthStore } from 'src/stores/auth-store';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import darkmodeComponent from 'src/components/darkmodeComponent.vue';

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
</script>
