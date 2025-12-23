<template>
  <div class="bg-gray-50 font-family-karla flex min-h-screen">
    <div class="w-full h-screen overflow-x-hidden flex flex-col">
      <main class="w-full flex-grow p-6">
        <div class="mb-8">
          <h5 class="text-xl font-black text-gray-800 dark:text-gray-900">Calendar</h5>
        </div>
        <div class="antialiased sans-serif">
          <div class="container py-2">
            <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
              <!-- Header -->
              <div class="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                <div>
                  <span class="text-xl font-semibold text-gray-900">{{ MONTH_NAMES[month] }}</span>
                  <span class="ml-2 text-xl text-gray-500">{{ year }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <!-- Prev -->
                  <button
                    type="button"
                    class="p-2 rounded-full hover:bg-gray-100 transition disabled:opacity-40"
                    :disabled="month === 0"
                    @click="prevMonth"
                  >
                    <svg
                      class="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <!-- Next -->
                  <button
                    type="button"
                    class="p-2 rounded-full hover:bg-gray-100 transition disabled:opacity-40"
                    :disabled="month === 11"
                    @click="nextMonth"
                  >
                    <svg
                      class="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Days -->
              <div class="flex flex-wrap bg-gray-50">
                <template v-for="day in DAYS" :key="day">
                  <div class="w-1/7 px-2 py-3">
                    <div
                      class="text-gray-500 text-sm uppercase tracking-wide font-semibold text-center"
                    >
                      {{ day }}
                    </div>
                  </div>
                </template>
              </div>

              <!-- Dates -->
              <div class="flex flex-wrap border-t border-gray-200">
                <div
                  v-for="blankday in blankdays"
                  :key="'blank-' + blankday"
                  class="w-1/7 h-28 border-r border-b border-gray-200 bg-gray-50 rounded-lg"
                ></div>

                <div
                  v-for="date in no_of_days"
                  :key="date"
                  class="w-1/7 h-28 p-2 border-r border-b border-gray-200 relative hover:bg-gray-50 transition rounded-lg"
                >
                  <div
                    @click="showEventModal(date)"
                    class="inline-flex w-9 h-9 items-center justify-center cursor-pointer text-center leading-none rounded-full transition transform hover:scale-105"
                    :class="
                      isToday(date)
                        ? 'bg-indigo-500 text-white shadow-md'
                        : 'text-gray-700 hover:bg-indigo-100'
                    "
                  >
                    {{ date }}
                  </div>

                  <div class="h-20 overflow-y-auto mt-2 space-y-1">
                    <div
                      v-for="event in getEventsForDate(date)"
                      :key="event.event_title"
                      class="px-2 py-1 rounded-xl text-sm font-medium shadow-sm"
                      :class="getThemeClasses(event.event_theme)"
                    >
                      {{ event.event_title }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal -->
          <div
            v-if="openEventModal"
            class="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center"
          >
            <div class="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg relative">
              <!-- Close button -->
              <button
                @click="openEventModal = false"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition rounded-full p-2 bg-gray-100"
              >
                ✕
              </button>
              <h2 class="text-2xl font-semibold text-gray-800 mb-6">Add Event Details</h2>
              <div class="space-y-4">
                <div>
                  <label class="text-gray-700 block mb-1 font-medium text-sm">Event title</label>
                  <input
                    v-model="newEvent.title"
                    class="bg-gray-100 border border-gray-200 rounded-xl w-full py-2 px-4 focus:bg-white focus:border-indigo-500 outline-none"
                    type="text"
                  />
                </div>
                <div>
                  <label class="text-gray-700 block mb-1 font-medium text-sm">Event date</label>
                  <input
                    :value="newEvent.date"
                    readonly
                    class="bg-gray-100 border border-gray-200 rounded-xl w-full py-2 px-4 outline-none"
                    type="text"
                  />
                </div>
                <div>
                  <label class="text-gray-700 block mb-1 font-medium text-sm">Select a theme</label>
                  <select
                    v-model="newEvent.theme"
                    class="block w-full bg-gray-100 border border-gray-200 px-4 py-2 rounded-xl focus:bg-white focus:border-indigo-500 outline-none"
                  >
                    <option v-for="t in themes" :key="t.value" :value="t.value">
                      {{ t.label }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="mt-8 text-right">
                <button
                  @click="openEventModal = false"
                  class="bg-white hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 border border-gray-200 rounded-xl mr-2 transition"
                >
                  Cancel
                </button>
                <button
                  @click="addEvent"
                  class="bg-indigo-500 hover:bg-indigo-400 text-white font-medium py-2 px-4 rounded-xl transition shadow-sm"
                >
                  Save Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

.font-family-karla {
  font-family: 'Karla', sans-serif;
}

/* Tailwind doesn’t include w-1/7 by default, so extend it in your config */
</style>

<script setup>
import { ref, onMounted } from 'vue';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// State
const month = ref(new Date().getMonth());
const year = ref(new Date().getFullYear());
const no_of_days = ref([]);
const blankdays = ref([]);
const isProfileOpen = ref(false);
const isMobileMenuOpen = ref(false);
const openEventModal = ref(false);

const events = ref([
  {
    event_date: new Date(2020, 3, 1).toDateString(),
    event_title: "April Fool's Day",
    event_theme: 'blue',
  },
  { event_date: new Date(2020, 3, 10).toDateString(), event_title: 'Birthday', event_theme: 'red' },
]);

const newEvent = ref({
  title: '',
  date: '',
  theme: 'blue',
});

const themes = [
  { value: 'blue', label: 'Blue Theme' },
  { value: 'red', label: 'Red Theme' },
  { value: 'yellow', label: 'Yellow Theme' },
  { value: 'green', label: 'Green Theme' },
  { value: 'purple', label: 'Purple Theme' },
];

// Methods
const getNoOfDays = () => {
  let daysInMonth = new Date(year.value, month.value + 1, 0).getDate();
  let dayOfWeek = new Date(year.value, month.value).getDay();

  blankdays.value = Array.from({ length: dayOfWeek }, (_, i) => i + 1);
  no_of_days.value = Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

const isToday = (date) => {
  const today = new Date();
  const d = new Date(year.value, month.value, date);
  return today.toDateString() === d.toDateString();
};

const showEventModal = (date) => {
  newEvent.value.date = new Date(year.value, month.value, date).toDateString();
  openEventModal.value = true;
};

const addEvent = () => {
  if (!newEvent.value.title) return;

  events.value.push({
    event_date: newEvent.value.date,
    event_title: newEvent.value.title,
    event_theme: newEvent.value.theme,
  });

  newEvent.value.title = '';
  openEventModal.value = false;
};

const getEventsForDate = (date) => {
  const targetDate = new Date(year.value, month.value, date).toDateString();
  return events.value.filter((e) => e.event_date === targetDate);
};

const prevMonth = () => {
  month.value--;
  getNoOfDays();
};
const nextMonth = () => {
  month.value++;
  getNoOfDays();
};

const getThemeClasses = (theme) => {
  const map = {
    blue: 'border-blue-200 text-blue-800 bg-blue-100',
    red: 'border-red-200 text-red-800 bg-red-100',
    yellow: 'border-yellow-200 text-yellow-800 bg-yellow-100',
    green: 'border-green-200 text-green-800 bg-green-100',
    purple: 'border-purple-200 text-purple-800 bg-purple-100',
  };
  return map[theme] || map.blue;
};

onMounted(() => {
  getNoOfDays();
});
</script>
