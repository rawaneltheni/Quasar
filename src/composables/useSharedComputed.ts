// useSharedComputed.ts

import { computed } from 'vue';
import { useQuasar } from 'quasar';

export function useSharedComputed() {
  const $q = useQuasar();

  const headerClasses = computed(() =>
    $q.dark.isActive ? 'text-xl font-black text-gray-100' : 'text-xl font-black text-gray-800',
  );

  const subHeaderClasses = computed(() =>
    $q.dark.isActive ? 'text-sm text-gray-400' : 'text-sm text-gray-600',
  );

  const captionClasses = computed(() =>
    $q.dark.isActive ? 'text-sm text-gray-400' : 'text-sm text-gray-500',
  );

  const valueClasses = computed(() =>
    $q.dark.isActive
      ? 'text-3xl font-semibold text-gray-100'
      : 'text-3xl font-semibold text-gray-900',
  );

  const increaseClasses = computed(() =>
    $q.dark.isActive
      ? 'row items-center text-green-400 text-sm font-medium'
      : 'row items-center text-green-600 text-sm font-medium',
  );

  const decreaseClasses = computed(() =>
    $q.dark.isActive
      ? 'row items-center text-red-400 text-sm font-medium'
      : 'row items-center text-red-600 text-sm font-medium',
  );

  const cardClasses = computed(() =>
    $q.dark.isActive ? 'bg-grey-10 text-white' : 'bg-grey-2 text-dark my-card',
  );

  return {
    headerClasses,
    subHeaderClasses,
    captionClasses,
    valueClasses,
    increaseClasses,
    decreaseClasses,
    cardClasses,
  };
}
