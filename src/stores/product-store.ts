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
    // cartItems: (state) => Object.groupBy(state.cart, ({ id }) => id),
  },

  actions: {
    editQuantity(symbol: 'increment' | 'decrement' | 'delete', product: Product) {
      const index = this.cartItems.findIndex((p) => p.id === product.id);
      if (index === -1) return;

      const item = this.cartItems[index];
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
        this.cartItems.splice(index, 1);
      }
    },
  },
});
