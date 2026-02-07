<template>
  <div class="q-gutter-md">
    <q-card v-for="prayer in prayers" :key="prayer.prayerName" dark bordered :class="cardClasses">
      <q-card-section>
        <div class="text-h6">{{ prayer.prayerName }}</div>
      </q-card-section>

      <q-separator dark />

      <q-card-section class="text-subtitle1">
        {{ prayer.prayerTime }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { Prayer } from 'src/models/prayer-models.js';
import { useSharedComputed } from 'src/composables/useSharedComputed.js';

const { cardClasses } = useSharedComputed();

defineProps<{
  prayers: Prayer[];
}>();
</script>
