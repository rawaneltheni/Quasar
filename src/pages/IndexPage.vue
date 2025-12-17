<template>
  <q-page class="row items-center justify-evenly">
    <product-components @add-to-cart="addToCart" :products="product"></product-components>
  </q-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import ProductComponents from '../components/ProductComponents.vue';
import { useProductStore } from '../stores/product-store.js';
import type { Product } from 'src/models/product-models.js';

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
        quantity: 1,
      },
      {
        id: 2,
        name: 'Headphones',
        price: 42,
        img: '/imgs/headphones.png',
        description: 'this is a headphone',
        quantity: 1,
      },
      {
        id: 3,
        name: 'Keyboard',
        price: 15,
        img: '/imgs/keyboard.png',
        description: 'this is a keyboard',
        quantity: 1,
      },
    ]);

    const store = useProductStore();

    const addToCart = (product: Product) => {
      alert('Item added to the cart');
      store.cart.push(product);
      store.productCount++;
      store.productQuantity++;
    };

    return {
      product,
      addToCart,
    };
  },
};
</script>
