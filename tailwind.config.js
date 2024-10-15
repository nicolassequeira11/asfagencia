/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        gold: {
          base: '#d6b046',
          light: '#f0d58f',
          dark: '#b18d31',
        },
        black: {
          base: "#13161b",
          dark: "#000000"
        }
      }
    },
  },
  plugins: [],
}

