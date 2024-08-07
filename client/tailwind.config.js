/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 .3rem .1rem rgba(0, 0, 0, .2)',
      },
    },
  },
  plugins: [],
}
