/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'hsl(220, 85%, 60%)', // 天空蓝（科技感）
          dark: 'hsl(270, 45%, 55%)', // 紫色偏灰（沉稳）
          japan: 'hsl(350, 70%, 55%)', // 暖红（樱花风）
        },
        background: {
          light: 'hsl(0, 0%, 100%)', // 白
          dark: 'hsl(230, 15%, 10%)', // 深蓝灰
          japan: 'hsl(30, 50%, 95%)', // 米白
        },
        textcolor: {
          light: 'hsl(220, 20%, 20%)', // 深灰蓝
          dark: 'hsl(0, 0%, 98%)', // 近白
          japan: 'hsl(10, 20%, 20%)', // 深红灰
        },
        muted: {
          light: 'hsl(220, 20%, 85%)',
          dark: 'hsl(220, 10%, 30%)',
          japan: 'hsl(20, 25%, 80%)',
        },
      },
    },
  },
  plugins: [],
};
