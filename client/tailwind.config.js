/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      gridTemplateColumns: {
        'cols4': 'repeat(4, minmax(0, auto))',
        'cols3': 'repeat(3, minmax(0, auto))',
        'cols2': 'repeat(2, minmax(0, auto))',
      },
    },
  },
  plugins: [],
}