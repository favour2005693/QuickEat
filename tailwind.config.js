/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      annimation: {
        'logo-pump': 'logo-pump 1.1s ease-in-out infinite', 
        'streak': 'streak-in  1.1s ease-in-out infinite',
      },
      Keyframes: {}
    },
  },
  plugins: [],
}