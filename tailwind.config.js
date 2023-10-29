/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sanst: ['"PT Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

