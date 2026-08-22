/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 春日清新绿（原 rose 粉色系 → 抹茶春绿）
        rose: {
          50: '#f1faf4',
          100: '#def3e6',
          200: '#bde6cf',
          300: '#8ed3ae',
          400: '#57ba87',
          500: '#2fa36a',
          600: '#248556',
          700: '#1f6845',
          800: '#1b5238',
          900: '#17432f',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
