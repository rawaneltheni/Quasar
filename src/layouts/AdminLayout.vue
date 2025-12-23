<template>
  <q-layout view="lHh lpR fFf">
    <div class="flex min-h-screen">
      <!-- Sidebar (full height) -->
      <aside class="w-64 bg-gray-900 text-gray-200 p-6 flex flex-col">
        <!-- Title -->
        <div class="text-2xl font-bold mb-6">Admin Dashboard</div>

        <!-- Menu Section -->
        <div>
          <div class="text-xs uppercase tracking-wider text-gray-400 mb-4">Menu</div>
          <nav class="flex flex-col space-y-2">
            <a
              href="/#/admin"
              class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white transition"
              >Overview</a
            >
            <a
              href="/#/products"
              class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white transition"
              >Products</a
            >
            <a
              href="/#/reports"
              class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white transition"
              >Reports</a
            >
            <a
              href="/#/calendar"
              class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white transition"
              >Calendar</a
            >
          </nav>
        </div>

        <!-- Divider + General Section pushed to bottom -->
        <div class="mt-auto">
          <hr class="border-gray-700 my-4" />
          <div class="text-xs uppercase tracking-wider text-gray-400 mb-4">General</div>
          <nav class="flex flex-col space-y-2">
            <a
              href="/#/admin"
              class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white transition"
              >Settings</a
            >
            <a
              href="/#/admin"
              class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white transition"
              >Security</a
            >
          </nav>
        </div>
      </aside>

      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col">
        <!-- Header -->
        <header
          class="flex items-center justify-between bg-gray-800 text-white px-6 py-3 shadow-md"
        >
          <!-- Search with icon -->
          <div class="flex-1 mx-6 relative">
            <!-- Icon -->
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path
                  d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
                />
              </svg>
            </span>

            <!-- Input -->
            <input
              class="w-full rounded-md border border-gray-600 bg-gray-700 pl-10 pr-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </div>

          <!-- Logout button -->
          <q-btn
            flat
            label="Logout"
            icon="login"
            @click="handleLogout"
            class="ml-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          />
        </header>

        <!-- Page Content -->
        <main class="flex-1 p-6 bg-gray-100">
          <q-page-container>
            <router-view />
          </q-page-container>
        </main>
      </div>
    </div>
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
</script>
