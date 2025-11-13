/********************
 Tailwind Config
********************/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        base: '#06070A'
      },
      dropShadow: {
        neon: '0 0 30px rgba(34,211,238,0.45)'
      }
    },
  },
  plugins: [],
}
