/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Fraunces"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        accent: '#a54b20',
        'accent-light': '#f6e3d8',
        'accent-mid': '#ebc2af',
        gold: '#c97b2a',
        'gold-light': '#fdf3e7',
        ink: '#1d1a17',
        'ink-2': '#3d332b',
        'ink-3': '#76685b',
        bg: '#f7f2ea',
        'bg-2': '#efe7da',
        'bg-3': '#e6dccd',
        border: '#ddd2c3',
        'border-2': '#c7b7a3',
      },
    },
  },
  plugins: [],
}
