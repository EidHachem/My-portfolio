/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      beige: '#eae2b7',
      blue: '#003049',
      lightBlue: '#b7bfea',
      purple: '#5f0f40',
      orange: '#f77f00',
      yellow: '#fcbf49',
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      handlee: ['Handlee', 'cursive'],
    },
    extend: {
      backgroundImage: {
        // logo: "url('/src/Assets/EH.png')",
      },
    },
  },
  plugins: [],
};
