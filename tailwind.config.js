/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // 主色调变量
        primary: {
          light: '#3B82F6', // 蓝色
          dark: '#8B5CF6', // 紫色
          japan: '#E11D48', // 红红日系
        },
        // 背景色变量
        background: {
          light: '#ffffff',
          dark: '#1f2937',
          japan: '#f5f3f0',
        },
        // 字体色变量
        textcolor: {
          light: '#1f2937',
          dark: '#f9fafb',
          japan: '#1c1c1c',
        },
      },
    },
  },
  plugins: [],
};
