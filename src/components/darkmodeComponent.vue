<template>
  <q-toggle
    v-model="theme.darkMode"
    checked-icon="check"
    color="primary"
    unchecked-icon="clear"
    @update:model-value="theme.setDark"
  />
</template>

<script setup>
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import { useThemeStore } from 'src/stores/theme-store';

const theme = useThemeStore();
const darkMode = ref(false);
const $q = useQuasar();

watch(darkMode, (darkMode) => {
  $q.dark.set(darkMode);
});
</script>

<style></style>
