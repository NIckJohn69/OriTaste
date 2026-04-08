export default {
  content: [
    "./index.html",
    "./**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#2A1F1D',    /* Deep espresso/brown */
          primary: '#C97A34', /* Warm amber/gold */
          primaryDark: '#A66329',
          light: '#F8F5F1',   /* Soft off-white */
          green: '#2e4934',   /* Earthy green */
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
