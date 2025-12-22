<template>
  <q-page padding>
    <div v-if="productStore.cart.length == 0">Your cart is empty</div>
    <div v-else>
      <div v-for="item in productStore.cartItems" :key="item.id">
        Item: {{ item.name }} <br />
        Price per item: ${{ item.price }} <br />
        Total price: ${{ item.price * item.quantity }} <br />
        Quantity:{{ item.quantity }}
        <br />
        <button @click="productStore.editQuantity('increment', item)">+</button>
        <button @click="productStore.editQuantity('decrement', item)">-</button>
        <button @click="productStore.editQuantity('delete', item)">Delete</button>
        <hr />
      </div>
    </div>
    <div>
      <h3>Checkout</h3>
      <p>Total: {{ totalPrice }}</p>
    </div>
    <div>
      <card-components></card-components>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useProductStore } from 'src/stores/product-store.js';
import type { Product } from 'src/models/product-models.js';
const productStore = useProductStore();
defineProps<{
  items: Product[];
}>();
const totalPrice = computed(() => {
  return productStore.cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
});
</script>

<style scoped>
/* Cart container */
.q-page {
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

/* Empty cart message */
div[v-if] {
  text-align: center;
  font-size: 1.2em;
  margin-top: 2rem;
  color: #555;
}

/* Cart item styling */
div[v-for] {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #fafafa;
}

/* Item details */
div[v-for] > br {
  display: none; /* Remove extra line breaks */
}

div[v-for] > div {
  margin-bottom: 0.5rem;
}

/* Buttons */
button {
  margin-right: 0.5rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

button:hover {
  opacity: 0.9;
}

button:nth-child(1) {
  /* + */
  background-color: #4caf50;
  color: white;
}

button:nth-child(2) {
  /* - */
  background-color: #f44336;
  color: white;
}

button:nth-child(3) {
  /* Delete */
  background-color: #9e9e9e;
  color: white;
}

/* Horizontal rule */
hr {
  margin-top: 1rem;
  border: 0;
  border-top: 1px solid #ccc;
}
</style>
