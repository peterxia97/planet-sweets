/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 低明度珊瑚色（rose 色系 → 莫兰迪暖珊瑚，不刺眼）
        rose: {
          50: '#faf0ee',
          100: '#f3ded9',
          200: '#e6c1b9',
          300: '#d69e93',
          400: '#c47f72',
          500: '#b06456',
          600: '#955043',
          700: '#77403a',
          800: '#5f3530',
          900: '#4e2d29',
        },
        // 低明度草绿
        willow: {
          50: '#f1f4ef',
          100: '#e2e9dc',
          200: '#c6d2bd',
          300: '#a9b89e',
          400: '#8b9d7e',
          500: '#6f8361',
          600: '#5a6a4e',
          700: '#48553f',
          800: '#3b4535',
          900: '#313930',
        },
        // 低明度雾蓝
        xizi: {
          50: '#f0f3f6',
          100: '#dde5ec',
          200: '#c0cdd9',
          300: '#a2b4c4',
          400: '#8298ac',
          500: '#6a7f94',
          600: '#566778',
          700: '#465462',
          800: '#384350',
          900: '#2f3943',
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
