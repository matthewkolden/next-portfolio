/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        robotomono: ['Roboto Mono', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
