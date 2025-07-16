/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/daisyui/**/*.js"  // DaisyUI
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}