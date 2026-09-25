/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa8a8',
          400: '#ff8787',
          500: '#ff6b6b', // Soft coral rose
          600: '#fa5252',
          700: '#e03131',
          800: '#c92a2a',
          900: '#a61e1e',
        },
        pastel: {
          blush: '#FFF0F5',
          cream: '#FFFDF9',
          peach: '#FFE8D6',
          lavender: '#F3E8FF',
          mint: '#E6F9F0',
          sky: '#EBF8FF',
          warmgray: '#F8F9FA',
          gold: '#FDF2E9',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        handwritten: ['"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 25px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 35px -3px rgba(0, 0, 0, 0.07)',
        'glow': '0 0 20px rgba(255, 107, 107, 0.25)',
      }
    },
  },
  plugins: [],
}
