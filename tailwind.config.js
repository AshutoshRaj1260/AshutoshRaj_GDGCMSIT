/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Add Poppins to the default sans-serif font family
      },
      colors: {
        color1: '#123456',
        color2: '#6A5ACD' ,
        color3: '#0D213F' ,
        color4: '#06006e' ,
        color5: '#40349c' ,
        color6: '#998bfbd9' ,
        color7: '#32316a ' ,
        color8 : '#6c2121',
        color9: '#0048ffd9' ,
        color10 : '#99bbffd9',
        color11: '#00b8fad9' ,
        color12: '#002152' ,
        color13: '#271050' ,
        color14: '#0E1525' ,
        darkMode: '#0e1525',
      },
    },
  },
  plugins: [],
}

