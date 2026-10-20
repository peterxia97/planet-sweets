/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 夏日珊瑚橙（rose 色系 → 夏日暖珊瑚）
        rose: {
          50: '#fff5f2',
          100: '#ffe6df',
          200: '#ffcdc0',
          300: '#ffa891',
          400: '#ff7d5c',
          500: '#ff6b4a',
          600: '#f04e2e',
          700: '#cc3a20',
          800: '#a52e1c',
          900: '#7f2417',
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
