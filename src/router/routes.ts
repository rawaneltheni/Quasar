import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/GuestLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/IndexPage.vue') }],
  },
  {
    path: '/login',
    component: () => import('src/layouts/LogLayout.vue'),
    children: [
      { path: 'login', component: () => import('src/pages/LoginPage.vue') },
      { path: '/login-admin', component: () => import('src/pages/AdminLoginPage.vue') },
    ],
  },
  {
    path: '/user',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('src/pages/UserPage.vue') },
      { path: '/cart', component: () => import('src/pages/CartPage.vue') },
    ],
  },
  {
    path: '/admin',
    component: () => import('src/layouts/AdminLayout.vue'),
    children: [
      { path: '/admin-dashbaord', component: () => import('src/pages/AdminDashboardPage.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound.vue'),
  },
];

export default routes;
