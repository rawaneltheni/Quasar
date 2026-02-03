<template>
  <div class="min-h-screen p-4 bg-gray-100 flex flex-col">
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 flex-1 auto-rows-fr">
      <div v-for="prayer in props.prayers.prayer" :key="prayer.prayerName" class="h-full">
        <a
          href="#"
          class="block h-full p-6 border border-gray-200 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition flex flex-col justify-between"
        >
          <h5 class="text-2xl font-semibold tracking-tight text-gray-900 leading-8 mb-3">
            {{ prayer.prayerName }}
          </h5>
          <p class="text-gray-600">{{ prayer.prayerTime }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PrayerTimes } from 'src/models/prayer-times-models.js';

const props = defineProps<{
  prayers: PrayerTimes;
}>();
</script>
