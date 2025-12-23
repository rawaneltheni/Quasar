<template>
  <div class="w-full">
    <!-- Top bar -->
    <div class="flex flex-col">
      <h5 class="text-2xl font-black tracking-tight text-gray-900">Products</h5>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Manage and organize your store's inventory.
      </p>
    </div>
    <div class="w-full">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="relative w-full sm:w-72">
          <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              class="h-4 w-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="product-search"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search for a product..."
          />
        </div>
      </div>
    </div>

    <!-- Table -->
    <div class="mt-8 overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                class="checkbox checkbox-primary checkbox-sm"
                aria-label="product"
              />
            </th>
            <th>Product</th>
            <th>Color</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- Example row -->
          <tr v-for="(product, index) in filteredProducts" :key="index">
            <th>
              <input
                type="checkbox"
                class="checkbox checkbox-primary checkbox-sm"
                aria-label="product"
              />
            </th>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="bg-base-content/10 h-10 w-10 rounded-md">
                    <img :src="product.image" alt="product image" />
                  </div>
                </div>
                <div>
                  <div class="text-sm opacity-50">{{ product.brand }}</div>
                  <div class="font-medium">{{ product.name }}</div>
                </div>
              </div>
            </td>
            <td>{{ product.color }}</td>
            <td>
              <div class="flex items-center">
                <span class="badge badge-primary badge-soft me-2 rounded-full p-1">
                  <span class="icon-[tabler--device-mobile]"></span>
                </span>
                {{ product.category }}
              </div>
            </td>
            <td>{{ product.price }}</td>
            <td>
              <button class="btn btn-circle btn-text btn-sm">
                Edit<span class="icon-[tabler--pencil] size-5"></span>
              </button>
              <button class="btn btn-circle btn-text btn-sm">
                Delete<span class="icon-[tabler--trash] size-5"></span>
              </button>
              <button class="btn btn-circle btn-text btn-sm">
                <span class="icon-[tabler--dots-vertical] size-5"></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="flex flex-wrap items-center justify-between gap-2 py-4 pt-6">
      <div class="me-2 block max-w-sm text-sm text-base-content/80 sm:mb-0">
        Showing <span class="font-semibold text-base-content/80">1-4</span> of
        <span class="font-semibold">{{ products.length }}</span> products
      </div>
      <nav class="join">
        <button type="button" class="btn btn-soft btn-square join-item">
          <span class="icon-[tabler--chevron-left] size-5 rtl:rotate-180"></span>
        </button>
        <button type="button" class="btn btn-soft join-item btn-square" aria-current="page">
          1
        </button>
        <button type="button" class="btn btn-soft join-item btn-square">2</button>
        <button type="button" class="btn btn-soft join-item btn-square">3</button>
        <button type="button" class="btn btn-soft btn-square join-item">
          <span class="icon-[tabler--chevron-right] size-5 rtl:rotate-180"></span>
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const search = ref('');
const products = ref([
  {
    brand: 'Apple',
    name: 'iPhone 14 Pro',
    color: 'Stealth black',
    category: 'Phone',
    price: '$599',
    image: 'https://cdn.flyonui.com/fy-assets/components/table/product-2.png',
  },
  {
    brand: 'Samsung',
    name: 'Galaxy S23',
    color: 'Phantom black',
    category: 'Phone',
    price: '$699',
    image: 'https://cdn.flyonui.com/fy-assets/components/table/product-1.png',
  },
]);
const filteredProducts = computed(() =>
  products.value.filter((p) =>
    (p.name + p.brand + p.category).toLowerCase().includes(search.value.toLowerCase()),
  ),
);
</script>

<style>
/* General layout */
.w-full {
  width: 100%;
}

.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.gap-3 {
  gap: 0.75rem;
}
.sm-flex-row {
  flex-direction: row;
}
.sm-items-center {
  align-items: center;
}
.sm-justify-between {
  justify-content: space-between;
}

/* Dropdown */
.dropdown {
  position: relative;
  display: inline-flex;
}
.dropdown-toggle {
  background: transparent;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 10rem;
  background: #fff;
  border: 1px solid #ddd;
  display: none;
  flex-direction: column;
  z-index: 10;
}
.dropdown-menu.show {
  display: flex;
}
.dropdown-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.dropdown-item:hover {
  background: #f0f0f0;
}

/* Input with icon */
.input {
  display: flex;
  align-items: center;
  max-width: 20rem;
  border: 1px solid #ccc;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}
.input span {
  margin-right: 0.5rem;
}
.input input {
  border: none;
  outline: none;
  flex-grow: 1;
}

/* Table */
.table {
  width: 100%;
  border-collapse: collapse;
}
.table th,
.table td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
}
.table thead {
  background: #f9f9f9;
}
.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 6px;
}
.badge {
  display: inline-flex;
  align-items: center;
  background: #e0f0ff;
  color: #007bff;
  border-radius: 9999px;
  padding: 0.25rem;
  font-size: 0.75rem;
}

/* Buttons */
.btn {
  border: none;
  background: #eee;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
}
.btn:hover {
  background: #ddd;
}
.btn-circle {
  border-radius: 50%;
}
.btn-sm {
  padding: 0.25rem;
}
.btn-square {
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Pagination */
.join {
  display: inline-flex;
}
.join-item {
  margin: 0 0.25rem;
}
.btn-soft {
  background: #f5f5f5;
}
.btn-soft:hover {
  background: #e0e0e0;
}

/* Utility spacing */
.mt-8 {
  margin-top: 2rem;
}
.overflow-x-auto {
  overflow-x: auto;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.pt-6 {
  padding-top: 1.5rem;
}
.me-2 {
  margin-right: 0.5rem;
}
.block {
  display: block;
}
.text-sm {
  font-size: 0.875rem;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.opacity-50 {
  opacity: 0.5;
}
</style>
