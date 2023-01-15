/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./index.html",
    "./_layouts/*.{html, js}",
    "./assets/**/*.{js, html}",
    "./_includes/**/*.html", 
    "./_web/*.html",
    "./_phpProjects/*.html"],

  theme: {
    extend: {
      keyframes: {
        flip: {
          '100%': { transform: 'rotatey(360deg)' },
        }, 
        wobble: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        }
      },

      animation: {
        flip: 'flip 3s infinite linear',
        wobble: 'wobble 1s ease-in-out infinite',
      }
    }
  },

  plugins: [require("daisyui")],
}
