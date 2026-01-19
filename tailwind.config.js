/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wine': {
          900: '#6C244C',  // Deep burgundy
          700: '#6B5B6E',  // Medium purple-gray
          500: '#8E8A99',  // Light purple-gray
          100: '#E5E3E8',  // Very light gray
        },
        'vine': '#5B7A3D',  // Forest green from logo
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
