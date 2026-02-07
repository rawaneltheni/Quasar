<template>
  <!-- PRAYER TIMES -->

  <div class="min-h-screen flex flex-col bg-gray-100 p-4">
    <!-- City & Date -->
    <div class="mb-4">
      <div class="text-4xl font-semibold text-gray-900">{{ city }}</div>
      <small class="text-gray-500">Date: {{ currentDate }}</small>
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
  </div>

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

const currentDate = ref(new Date().toLocaleDateString());
const prayers = ref<{ prayerName: string; prayerTime: string }[]>([]);
const city = ref('Benghazi');
const country = ref('Libya');

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

<style>
/* .quote-box {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px 30px;
  text-align: center;
  font-family: Georgia, serif;
  background: #f9f9f9;
  border-left: 4px solid #333;
  border-radius: 4px;
}

.quote-box i {
  font-size: 1.4rem;
  color: #222;
  display: block;
  margin-bottom: 12px;
  line-height: 1.4;
}

.quote-box p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  text-align: right;
}

.quote-box button {
  margin-top: 20px;
  padding: 8px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  background: #333;
  color: #fff;
  border-radius: 4px;
  transition:
    background 0.2s ease,
    transform 0.1s ease;
}

.quote-box button:hover {
  background: #555;
}

.quote-box button:active {
  transform: scale(0.97);
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
} */

.my-custom-toggle {
  border: 1px solid #027be3;
}
</style>
