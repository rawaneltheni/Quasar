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
import { useSharedComputed } from 'src/composables/useSharedComputed.js';

const $q = useQuasar();
const {
  headerClasses,
  subHeaderClasses,
  captionClasses,
  valueClasses,
  increaseClasses,
  decreaseClasses,
} = useSharedComputed();
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
