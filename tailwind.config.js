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

        'gruv-bg0_h': '#f9f5d7',
        'gruv-bg0': '#fbf1c7',
        'gruv-bg1': '#ebdbb2',
        'gruv-bg2': '#d5c4a1',
        'gruv-fg0': '#282828',
        'gruv-blue': '#458588',
        'gruv-blue-alt': '#076678',
        'gruv-aqua': '#689d6a',
        'gruv-red': '#cc241d'
      }
    },

  },
  plugins: [],
}

