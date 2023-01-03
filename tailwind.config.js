/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./index.html",
    "./_layouts/*.{html, js}",
    "./assets/**/*.{js, html}",
    "./_includes/**/*.html", 
    "./_web/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
