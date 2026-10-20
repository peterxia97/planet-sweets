/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 珊瑚粉红（rose 色系 → 正常明度彩虹主色）
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
        // 彩虹草绿
        willow: {
          50: '#f2fbf3',
          100: '#e3f9e7',
          200: '#c6f0cd',
          300: '#a3e5ae',
          400: '#69db7c',
          500: '#40c057',
          600: '#2f9e44',
          700: '#2b8a3e',
          800: '#256d33',
          900: '#22562c',
        },
        // 彩虹天蓝
        xizi: {
          50: '#f0f8ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#4dabf7',
          500: '#339af0',
          600: '#1c7ed6',
          700: '#1864ab',
          800: '#145591',
          900: '#123a6b',
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
