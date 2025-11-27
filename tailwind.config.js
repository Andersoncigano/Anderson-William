/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brandBlack: '#050505',
        brandWhite: '#F9FAFB',
      },
      animation: {
        'slideUp': 'revealUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      }
    },
  },
  plugins: [],
}