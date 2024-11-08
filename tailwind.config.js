/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins','sans-serif'],
        'inter':['Inter', 'sans-serif'],
        'inter-tight':['Inter Tight','sans-serif']
      },
      colors:{
        'primary':"#3238f2"
      }
    },
  },
  plugins: [],
}

