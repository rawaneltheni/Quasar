<template>
  <q-layout view="hHh LpR lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          {{ Title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-lable>Navigation Links</q-item-lable>
      </q-list>

      <q-list>
        <q-item v-for="nav in navs" :key="nav.to" :to="nav.to" clickable :breakpoint="767">
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
            <span v-if="nav.label === 'Cart'">{{ productStore.productCount }}</span>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-blue-8 text-white">
      <q-tabs>
        <q-route-tab v-for="nav in navs" :key="nav.to" :to="nav.to" clickable></q-route-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useProductStore } from '../stores/product-store';

defineProps<{
  Title: string;
}>();

const leftDrawerOpen = ref(true);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const navs = ref([
  { label: 'Home', icon: 'home', to: '/' },
  { label: 'Cart', icon: 'shopping_cart', to: '/cart' },
]);

const productStore = useProductStore();
</script>

<style>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

/* .q-drawer .q-router-link--exact-active {
  color: whitesmoke;
} */
</style>
