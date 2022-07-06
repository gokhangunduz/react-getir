module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-color': '#4c3398',
        'primary-color': '#5d3ebc',
        'secondary-color': '#7849f7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
