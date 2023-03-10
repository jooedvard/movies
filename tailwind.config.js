/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    gridTemplateColumns:{
      'fluid': 'repeat(auto-fill, minmax(15rem, 2fr))',
      'two-column': 'auto auto',
     
    },
    gridTemplateRows:{
      'auto-1-auto': 'auto 1fr auto'
    }
  },
  plugins: [],
}
