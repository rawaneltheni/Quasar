<template>
  <q-toggle v-model="darkMode" checked-icon="check" color="primary" unchecked-icon="clear" />
</template>

<script setup>
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';

const darkMode = ref(false);
const $q = useQuasar();

// console.log($q.dark.isActive);
// console.log($q.dark.mode);
// $q.dark.set(true);
// $q.dark.toggle();

watch(darkMode, (darkMode) => {
  $q.dark.set(darkMode);
});
</script>

<style></style>
