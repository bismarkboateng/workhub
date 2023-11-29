/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-color': '#285fe2',
        'body-background': 'rgb(246,248,255)'
      },
      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif']
      },
      colors: {
        'text-color': '#242839',
        'text-color-2': '#f6f8ff'
      }
    },
  },
  plugins: [],
}