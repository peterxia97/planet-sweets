/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 桃夭粉（RGB 246 190 205）— 参考国风水彩配色
        rose: {
          50: '#fdf4f7',
          100: '#fbe6ed',
          200: '#f6becd',
          300: '#f0a3b9',
          400: '#e884a4',
          500: '#dc6489',
          600: '#c74a71',
          700: '#a83a5e',
          800: '#892f4d',
          900: '#6f2840',
        },
        // 柳色绿（RGB 169 206 54）
        willow: {
          50: '#f6faea',
          100: '#edf5d3',
          200: '#dceba9',
          300: '#c8e07f',
          400: '#a9ce36',
          500: '#8fb52a',
          600: '#729523',
          700: '#59751e',
          800: '#485d1c',
          900: '#3c4d1b',
        },
        // 西子蓝（RGB 135 190 205）
        xizi: {
          50: '#f0f8fa',
          100: '#ddeef2',
          200: '#bcdde6',
          300: '#a3cbda',
          400: '#87becd',
          500: '#5fa3b6',
          600: '#4a8798',
          700: '#3d6d7b',
          800: '#355964',
          900: '#2f4a53',
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
