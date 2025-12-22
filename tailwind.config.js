/** @type {import('tailwindcss').Config} */
module.exports = {
  // Use a prefix to avoid conflicts with Quasar's internal classes
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
