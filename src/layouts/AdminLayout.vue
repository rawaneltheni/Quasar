<template>
  <q-layout view="lHh Lpr fFf">
    <!-- Sidebar -->
    <q-drawer show-if-above side="left" width="260" class="bg-sidebar">
      <div class="q-pa-md column fit">
        <!-- Title -->
        <div class="text-h6 q-mb-lg">{{ $t('admindashbaord') }}</div>

        <!-- Menu -->
        <div>
          <div class="text-caption text-muted q-mb-sm">{{ $t('menu') }}</div>

          <q-list dense>
            <q-item clickable v-ripple to="/admin">
              <q-item-section>{{ $t('overview') }}</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/products">
              <q-item-section>{{ $t('products') }}</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/reports">
              <q-item-section>{{ $t('reports') }}</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/calendar">
              <q-item-section>{{ $t('calendar') }}</q-item-section>
            </q-item>
          </q-list>
        </div>

        <q-space />

        <!-- General -->
        <q-separator class="q-my-md" />

        <div>
          <div class="text-caption text-muted q-mb-sm">{{ $t('general') }}</div>

          <q-list dense>
            <q-item clickable v-ripple to="/admin">
              <q-item-section>{{ $t('setting') }}</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/admin">
              <q-item-section>{{ $t('security') }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-drawer>

    <!-- Header -->
    <q-header class="bg-header">
      <q-toolbar>
        <!-- Search -->
        <q-input dense outlined :placeholder="$t('search')" class="q-mx-md col bg-surface">
          <template #prepend>
            <q-icon name="search" />
          </template>
        </q-input>

        <!-- Logout -->
        <q-btn
          color="primary"
          :label="$t('logout')"
          icon="logout"
          class="q-ml-sm"
          @click="handleLogout"
        />

        <!-- I18N -->
        <div class="q-pa-md">
          <q-btn-dropdown color="primary" :label="$t('lang')">
            <q-list>
              <q-item clickable v-close-popup @click="setLocale('en-US')">
                <q-item-section>
                  <q-item-label>English</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="setLocale('ar-LY')">
                <q-item-section>
                  <q-item-label>العربية</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>

        <!-- Theme toggle -->
        <darkmode-component class="q-ml-sm" />
      </q-toolbar>
    </q-header>

    <!-- Page Content -->
    <q-page-container>
      <q-page class="q-pa-md bg-app">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useAuthStore } from 'src/stores/auth-store';
import { useRouter } from 'vue-router';
import { Lang, useQuasar } from 'quasar';
import darkmodeComponent from 'src/components/darkmodeComponent.vue';
import { useI18n } from 'vue-i18n';

const $q = useQuasar();
const router = useRouter();
const auth = useAuthStore();
const { locale, t } = useI18n();

function setLocale(lang) {
  locale.value = lang;
  // log and notify so we can see the change
  // eslint-disable-next-line no-console
  console.log('Locale set to', locale.value);
  $q.notify({ type: 'info', message: `Locale: ${locale.value}` });
}

async function handleLogout() {
  auth.logout();

  $q.notify({
    type: 'positive',
    message: t('logout'),
  });

  await router.push('/auth');
}
</script>
