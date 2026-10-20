/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 柑橘橙 #F4B15F — 海崖·柑橘日落主题强调色
        rose: {
          50: '#fef7ee',
          100: '#fdecd6',
          200: '#f8d5a8',
          300: '#f4b15f',
          400: '#ef9d3f',
          500: '#e08427',
          600: '#c26a1c',
          700: '#9d5318',
          800: '#7e4215',
          900: '#683713',
        },
        // 橄榄绿 #A1BE8E
        willow: {
          50: '#f4f7f0',
          100: '#e7efe0',
          200: '#cdddc1',
          300: '#bccfb0',
          400: '#a1be8e',
          500: '#87a673',
          600: '#6b8859',
          700: '#556c47',
          800: '#45573b',
          900: '#3a4933',
        },
        // 海湾蓝 #6FB0D8
        xizi: {
          50: '#f1f8fc',
          100: '#ddeef8',
          200: '#b9dbef',
          300: '#96c6e6',
          400: '#6fb0d8',
          500: '#4f97c4',
          600: '#3f7ba2',
          700: '#356383',
          800: '#2d516c',
          900: '#28445b',
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
