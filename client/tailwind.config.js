/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Tenor-Sans': ["Tenor Sans", "sans-serif"],
        'Grey-Qo': ["Grey Qo", "cursive"],
        'Orbitron-font': ["Orbitron", "sans-serif"],
        'Poppins-font': ["Poppins", "sans-serif"],
        'Maname-font': ["Maname", "sans-serif"],
        'RobotoMono-font': ["Roboto Mono", "monospace"],
        'Playfair-font': ["Playfair Display", "monospace"],
        'NotoSerif-font': ["Noto Serif Khitan Small Script", "serif"],
      },
      boxShadow: {
        'custom-shadow': '0 .3rem .1rem rgba(0, 0, 0, .2)',
      },
      backgroundColor: {
        'custom-purple' : 'rgba(25, 17, 51, 1)',
      },
      width: {
        '2.5' : '10px',
        '58' : '235px',
      },
      height: {
        '22' : '87px',
      },
    },
  },
  plugins: [],
}
