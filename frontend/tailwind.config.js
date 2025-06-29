// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// const flowbite = require("flowbite-react/tailwind");
// export default {
//   content: [
//     "./index.html", 
//     "./src/**/*.{js,ts,jsx,tsx}"
//     flowbite.content(),
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//   flowbite.plugins(),
//   ],
// };
// tailwind.config.js
// import flowbite from 'flowbite-react/tailwind';

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     ...flowbite.content(), // spread content array
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     ...flowbite.plugins(), // spread plugins array
//   ],
// };

// tailwind.config.js
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

