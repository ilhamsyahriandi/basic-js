/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",
    '*.html',
    './assets/js/main.js'],
  theme: {
    extend: {
      fontFamily: {
        'amatic': ["Amatic SC, cursive",],
      }

    },
  },
  plugins: [],
}
