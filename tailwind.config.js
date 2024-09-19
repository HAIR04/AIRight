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
        'lightblue' : '#f8f9fd',

      },
      borderRadius:{
        '4xl' : '35px',
      },
      padding:{
        '26' : '6.3rem' 
      }
    },
  },
  plugins: [],
}
