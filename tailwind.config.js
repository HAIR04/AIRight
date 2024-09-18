/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#da613a',
        'popular' : '#935aff',
      },
      borderRadius:{
        '4xl' : '35px',
      }
    },
  },
  plugins: [],
}
