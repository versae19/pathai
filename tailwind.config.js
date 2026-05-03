/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        accent: '#1B6B4A',
        'accent-light': '#E8F5EE',
        'accent-mid': '#D1EDDC',
        gold: '#C97B2A',
        'gold-light': '#FDF3E7',
        ink: '#1A1916',
        'ink-2': '#4A4840',
        'ink-3': '#8A8780',
        bg: '#FAFAF8',
        'bg-2': '#F2F0EB',
        'bg-3': '#ECEAE3',
        border: '#E2E0D8',
        'border-2': '#D0CEC5',
      },
    },
  },
  plugins: [],
}
