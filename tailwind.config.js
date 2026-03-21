/** @type {import('tailwindcss').Config} */
import { safelist } from 'tailwindcss-safelist'

export default {
  safelist: [
    'bg-gradient-to-r',
    'from-gold-400',
    'from-gold-500',
    'to-orange-500',
    'bg-gold-500',
    'border-gold-400',
    'border-gold-500',
    'text-gold-400',
    'text-gold-600',
    {
      pattern: /gold/,
    },
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      colors: {
        gold: {
          400: '#FCD34D',
          500: '#FBBF24',
        },
        'primary-glow': 'var(--primary-glow)',
        'primary-glow': 'var(--primary-glow)',
        'dark-space': 'var(--dark-space)',
        'secondary': 'var(--secondary)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}