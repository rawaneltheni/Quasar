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
  </q-page>
</template>

<script setup lang="ts">
import { useProductStore } from 'src/stores/product-store.js';
import type { Product } from 'src/models/product-models.js';
const productStore = useProductStore();
defineProps<{
  items: Product[];
}>();
</script>

<style></style>
