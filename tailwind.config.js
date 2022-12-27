/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./index.html",
    "./_layouts/*.{html, js}",
    "./assets/**/*.{js, html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
