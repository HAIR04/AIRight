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
        'skin'    : '#FEF2D3'
        
      },
      borderRadius:{
        '4xl' : '35px',
      },
      padding:{
        '26' : '6.3rem' 
      },
      fontSize :{
        '15px' : '15px',
        '17px' : '17px',
      },
      spacing:{ //Custom left , top 
        '30' : '7.5rem'
      },
      borderWidth :{
        '25' : '25px',
      }
    },
  },
  plugins: [],
}
