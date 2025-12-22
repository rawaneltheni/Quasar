<template>
  <q-page class="login-page flex flex-center">
    <q-card class="login-card q-pa-lg shadow-10">
      <q-card-section class="text-center">
        <div class="text-h5 text-weight-bold">Welcome Back 👋</div>
        <div class="text-subtitle2 text-grey-6">Login to continue</div>
      </q-card-section>

      <q-form @submit.prevent="handleLogin" class="q-gutter-md">
        <q-input
          v-model="email"
          label="Email"
          type="email"
          filled
          rounded
          lazy-rules
          :rules="[(val) => !!val || 'Email is required']"
        >
          <template #prepend>
            <q-icon name="email" />
          </template>
        </q-input>

        <q-input
          v-model="password"
          label="Password"
          type="password"
          filled
          rounded
          lazy-rules
          :rules="[(val) => !!val || 'Password is required']"
        >
          <template #prepend>
            <q-icon name="lock" />
          </template>
        </q-input>

        <q-btn
          label="Login"
          type="submit"
          color="primary"
          rounded
          unelevated
          class="full-width q-mt-sm"
          :loading="loading"
        />
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup lang="js">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useAuthStore } from 'src/stores/auth-store';

const email = ref('');
const password = ref('');
const loading = ref(false);

const router = useRouter();
const auth = useAuthStore();
const $q = useQuasar();

async function handleLogin() {
  loading.value = true;

  const success = await auth.login(email.value, password.value);

  if (success) {
    if (auth.isAdmin) await router.push('/admin');
    else if (auth.isUser) await router.push('/user');
  } else {
    $q.notify({
      type: 'negative',
      message: 'Invalid email or password',
    });
  }

  loading.value = false;
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #5c6bc0, #42a5f5);
}

.login-card {
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
}
</style>
