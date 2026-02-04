<template>
  <q-page class="q-pa-lg">
    <!-- Page Header -->
    <div class="q-mb-xl">
      <h5 :class="headerClasses">Dashboard</h5>
      <span :class="subHeaderClasses">Easily managing your sales</span>
    </div>

    <!-- Stats Grid -->
    <div class="row q-col-gutter-lg">
      <!-- Revenue Card -->
      <div class="col-12 col-md-4">
        <q-card flat bordered class="q-pa-md dashboard-card">
          <q-card-section>
            <div :class="captionClasses">Revenue</div>
            <div :class="valueClasses">$192.1k</div>
            <div :class="increaseClasses">
              <span>32k increase</span>
              <q-icon name="trending_up" size="18px" />
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Customers Card -->
      <div class="col-12 col-md-4">
        <q-card flat bordered class="q-pa-md dashboard-card">
          <q-card-section>
            <div :class="captionClasses">New customers</div>
            <div :class="valueClasses">1340</div>
            <div :class="decreaseClasses">
              <span>3% decrease</span>
              <q-icon name="trending_down" size="18px" />
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Orders Card -->
      <div class="col-12 col-md-4">
        <q-card flat bordered class="q-pa-md dashboard-card">
          <q-card-section>
            <div :class="captionClasses">New orders</div>
            <div :class="valueClasses">3543</div>
            <div :class="increaseClasses">
              <span>7% increase</span>
              <q-icon name="trending_up" size="18px" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

// Dynamic classes based on dark mode
const headerClasses = computed(() =>
  $q.dark.isActive ? 'text-xl font-black text-gray-100' : 'text-xl font-black text-gray-800',
);

const subHeaderClasses = computed(() =>
  $q.dark.isActive ? 'text-sm text-gray-400' : 'text-sm text-gray-600',
);

const captionClasses = computed(() =>
  $q.dark.isActive ? 'text-sm text-gray-400' : 'text-sm text-gray-500',
);

const valueClasses = computed(() =>
  $q.dark.isActive
    ? 'text-3xl font-semibold text-gray-100'
    : 'text-3xl font-semibold text-gray-900',
);

const increaseClasses = computed(() =>
  $q.dark.isActive
    ? 'row items-center text-green-400 text-sm font-medium'
    : 'row items-center text-green-600 text-sm font-medium',
);

const decreaseClasses = computed(() =>
  $q.dark.isActive
    ? 'row items-center text-red-400 text-sm font-medium'
    : 'row items-center text-red-600 text-sm font-medium',
);
</script>

<style scoped>
.dashboard-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.dashboard-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}
</style>
