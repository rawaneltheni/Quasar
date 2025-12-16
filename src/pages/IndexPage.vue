<template>
  <q-page class="row items-center justify-evenly">
    <product-components :products="products"></product-components>
  </q-page>
</template>

<script lang="ts">
import { ref } from 'vue';

import ProductComponents from '../components/ProductComponents.vue';

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
}

export default {
  components: { ProductComponents },
  setup() {
    const products = ref<Product[]>([
      {
        id: 1,
        name: 'Laptop',
        price: 520,
        img: '/imgs/laptop.png',
        description: 'this is a laptop',
      },
      {
        id: 2,
        name: 'Headphones',
        price: 42,
        img: '/imgs/headphones.png',
        description: 'this is a headphone',
      },
      {
        id: 3,
        name: 'Keyboard',
        price: 15,
        img: '/imgs/keyboard.png',
        description: 'this is a keyboard',
      },
    ]);

    return {
      products,
    };
  },
};
</script>
