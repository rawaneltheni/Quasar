import { defineStore } from 'pinia';
import type { User } from 'src/models/user-models.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isLoggedIn: false,
    fakeUsers: [
      { email: 'admin@example.com', password: 'admin123', role: 'admin' },
      { email: 'user1@example.com', password: 'user123', role: 'user' },
    ] as User[],
  }),

  getters: {
    role: (state) => state.user?.role || null,
    isAdmin: (state) => state.user?.role === 'admin',
    isUser: (state) => state.user?.role === 'user',
  },

  actions: {
    login(email: string, password: string) {
      const foundUser = this.fakeUsers.find((u) => u.email === email && u.password === password);

      if (foundUser) {
        this.user = { email: foundUser.email, role: foundUser.role, password: foundUser.password };
        this.isLoggedIn = true;
        return true;
      } else {
        return false;
      }
    },

    logout() {
      this.user = null;
      this.isLoggedIn = false;
    },
  },
});
