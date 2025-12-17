<template>
  <q-page class="row items-center justify-evenly">
    <product-components @add-to-cart="addToCart" :products="product"></product-components>
  </q-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import ProductComponents from '../components/ProductComponents.vue';
import { useProductStore } from '../stores/product-store.js';

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
    const product = ref<Product[]>([
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

    const store = useProductStore();

    const addToCart = (product: Product) => {
      store.cart.push(product);
      store.productCount++;
    };

    return {
      product,
      addToCart,
    };
  },
};
</script>
