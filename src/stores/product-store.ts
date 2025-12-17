import { defineStore } from 'pinia';
import type { Product } from 'src/models/product-models.js';

export const useProductStore = defineStore('product', {
  state: () => ({
    productCount: 0,
    productQuantity: 0,
    cart: [] as Product[],
  }),

  getters: {
    cartItems: (state) => state.cart,
  },

  actions: {
    editQuantity(symbol: 'increment' | 'decrement' | 'delete', product: Product) {
      const index = this.cart.findIndex((p) => p.id === product.id);
      if (index === -1) return;

      const item = this.cart[index];
      if (!item) return;

      if (symbol === 'increment') {
        item.quantity++;
        this.productCount++;
      } else if (symbol === 'decrement') {
        if (item.quantity > 1) {
          item.quantity--;
          this.productCount--;
        }
      } else {
        this.productCount = this.productCount - item.quantity;
        this.cart.splice(index, 1);
      }
    },
  },
});
