/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4D1F0",
          dark: "#7E78D2",
        },
        background: {
          DEFAULT: "#F1F0FA",
          dark: "#202020",
        },
      },
    },
  },
  plugins: [],
};
