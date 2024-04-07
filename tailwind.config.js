/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 'roboto': ['Roboto', 'sans'] },
      colors: {
        'latt-bg': '#f4deba',
        'latt-purple': '#542141',
      }
    },

  },
  plugins: [],
}

