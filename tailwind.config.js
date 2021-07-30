const {colors: defaultColors} = require('tailwindcss/defaultTheme')
const colors = {
  ...defaultColors,
  ...{
  'LightBlue':'#0ec6d5',
  'DarkBlue':'#0383bd',
  'black':'#060e1a',
  'CustomGray':'#61666e',
  }
}
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    "colors":colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
