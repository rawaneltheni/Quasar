import { defineStore } from 'pinia';
import { ref } from 'vue';

// Reuse the Product interface
export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
}

export const useProductStore = defineStore('product', () => {
  const productCount = ref(0);
  const cart = ref<Product[]>([]);

  const addToCart = (product: Product) => {
    cart.value.push(product);
    productCount.value++;
  };

  return {
    productCount,
    cart,
    addToCart,
  };
});
