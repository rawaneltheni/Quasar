<template>
  <div class="min-h-screen p-4 bg-gray-100 flex flex-col">
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 flex-1 auto-rows-fr">
      <div v-for="prayer in prayers" :key="prayer.prayerName">
        <a
          class="block h-full p-6 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition"
        >
          <h5 class="text-2xl font-semibold mb-3">
            {{ prayer.prayerName }}
          </h5>
          <p class="text-gray-600">{{ prayer.prayerTime }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Prayer } from 'src/models/prayer-models.js';

defineProps<{
  prayers: Prayer[];
}>();
</script>
