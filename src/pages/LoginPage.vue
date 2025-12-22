<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 350px">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="handleLogin" ref="loginForm">
          <q-input v-model="email" label="Email" type="email" outlined dense required />
          <q-input
            v-model="password"
            label="Password"
            type="password"
            outlined
            dense
            required
            class="q-mt-sm"
          />
          <q-btn type="submit" label="Login" color="primary" class="full-width q-mt-md" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Notify } from 'quasar';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
  if (email.value === 'test@example.com' && password.value === '123456') {
    Notify.create({ type: 'positive', message: 'Login Successful!' });
    router.push('/user');
  } else {
    Notify.create({ type: 'negative', message: 'Invalid credentials' });
  }
};
</script>
