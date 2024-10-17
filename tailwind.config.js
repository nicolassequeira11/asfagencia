/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  plugins: [nextui()],
}

