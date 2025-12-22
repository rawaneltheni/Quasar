<template>
  <q-layout view="hHh LpR lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Quasar Shop </q-toolbar-title>

        <!-- spacer pushes login to the right -->
        <q-space />

        <!-- Login button -->
        <!-- <q-btn flat label="Login" icon="login" @click="goToLogin" /> -->
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" bordered>
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
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-blue-8 text-white"> </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// import { useRouter } from 'vue-router';

// const router = useRouter();

// // const title = 'My App';

// const goToLogin = () => {
//   router.push('/auth');
// };
</script>

<style></style>
