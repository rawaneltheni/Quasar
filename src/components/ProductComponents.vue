<template>
  <div class="q-pa-md row items-start q-gutter-md" v-for="product in products" :key="product.id">
    <q-card class="my-card" flat bordered>
      <q-img :src="product.img" />

      <q-card-section>
        <div class="text-h6">{{ product.name }}</div>
        <div class="text-subtitle2">$ {{ product.price }}</div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-btn round color="primary" glossy icon="local_grocery_store" />

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ product.description }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script lang="ts">
import { ref, defineProps } from 'vue';

export default {
  name: 'ProductComponents',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const expanded = ref(false);
    return {
      expanded,
    };
  },
};
</script>
