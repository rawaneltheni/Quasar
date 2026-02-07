<template>
  <!-- PRAYER TIMES -->

  <q-page>
    <!-- City & Date -->
    <div>
      <div :class="headerClasses">{{ city }}</div>
      <small :class="subHeaderClasses">Date: {{ currentDate }}</small>
      <hr class="border-gray-200 mt-2" />
    </div>

    <!-- Prayer Cards -->
    <div class="flex-1 overflow-auto">
      <prayer-components :prayers="prayers" />
    </div>

    <!-- City Dropdown -->
    <div class="mt-4">
      <label for="cities" class="block text-sm font-medium text-gray-700 mb-1">
        Change city:
      </label>
      <select
        name="cities"
        id="cities"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        v-model="city"
        @change="loadPrayer"
      >
        <option value="Benghazi">Benghazi</option>
        <option value="Tripoli">Tripoli</option>
      </select>
    </div>
  </q-page>

  <!-- KANYE QUOTES -->

  <!-- <div class="quote-box">
    <transition name="fade" mode="out-in">
      <i :key="quote">"{{ quote }}"</i>
    </transition>

    <p>- Kanye West</p>

    <button @click="loadQuote">New quote</button>
  </div> -->
</template>

<script setup lang="ts">
import { getPrayerTime } from 'src/boot/axios/services/prayerAPI';
import PrayerComponents from 'src/components/prayerComponents.vue';
import { onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useSharedComputed } from 'src/composables/useSharedComputed.js';

const currentDate = ref(new Date().toLocaleDateString());
const prayers = ref<{ prayerName: string; prayerTime: string }[]>([]);
const city = ref('Benghazi');
const country = ref('Libya');
const $q = useQuasar();
const { headerClasses, subHeaderClasses } = useSharedComputed();
const quote = ref('');

// ========== GET REQUESTS WITH AXIOS ==========

// WITH ASYNC

// axios method
// const loadQuote = async () => {
//   const reponse = await axios.get('https://api.kanye.rest/');
//   quote.value = reponse.data.quote;
// };

// built-in reusable method
// const loadQuote = async () => {
//   const reponse = await KanyeAPI.getQoute();
//   quote.value = reponse.data.quote;
// };
// loadQuote();

// WITHOUT ASYNC

// axios.get('https://api.kanye.rest/').then((reponse) => {
//   quote.value = reponse.data.quote;
// });

const loadPrayer = async () => {
  try {
    const data = await getPrayerTime(city.value, country.value);

    prayers.value = [
      { prayerName: 'Fajr', prayerTime: data.timings.Fajr },
      { prayerName: 'Dhuhr', prayerTime: data.timings.Dhuhr },
      { prayerName: 'Asr', prayerTime: data.timings.Asr },
      { prayerName: 'Maghrib', prayerTime: data.timings.Maghrib },
      { prayerName: 'Isha', prayerTime: data.timings.Isha },
    ];
  } catch (error) {
    console.error('Failed to load prayer times', error);
  }
};

onMounted(() => {
  loadPrayer();
});
</script>
