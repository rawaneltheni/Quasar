import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/GuestLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/IndexPage.vue') }],
  },

  {
    path: '/auth',
    component: () => import('../layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/LoginPage.vue') }],
  },

  {
    path: '/user',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('src/pages/UserPage.vue') },
      { path: 'cart', component: () => import('src/pages/CartPage.vue') },
    ],
  },

  {
    path: '/admin',
    component: () => import('src/layouts/AdminLayout.vue'),
    children: [
      {
        path: 'admin-dashboard',
        component: () => import('src/pages/AdminDashboardPage.vue'),
        meta: { requiresAuth: true }, // ask for this (Route Guard)
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound.vue'),
  },
];

export default routes;
