/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        azonix: ['Azonix', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'infinite-scroll': 'infinite-scroll var(--animation-duration, 25s) linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse var(--animation-duration, 25s) linear infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.3' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};