/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  fontFamily: {
    ttcommons: ['"TT Commons Pro"'],
    gtalpina: ['"GT Alpina"', 'serif'],
  },
  plugins: [],
  darkMode: "class"
}