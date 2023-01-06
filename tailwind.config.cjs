/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons'
      },
      backgroundImage: {
        'backgroundImg': "url('./src/assets/dunes.jpg')",
      }
    },
  },
  plugins: [],
}