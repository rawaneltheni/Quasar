// /** @type {import('tailwindcss').Config} */
// export default {
//   // Use a prefix to avoid conflicts with Quasar's internal classes
//   // prefix: 'tw-',
//   content: ['./src/**/*.{vue,js,ts}'],
//   theme: { extend: {} },
//   plugins: [require('daisyui'), require('flyonui')],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flyonui/dist/js/*.js', // Crucial for FlyonUI JS components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flyonui'),
    require('flyonui/plugin'), // Required for the CSS components
  ],
};

const withMT = require('@material-tailwind/html/utils/withMT');

module.exports = withMT({
  content: ['./index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
});
