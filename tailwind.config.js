/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 20,
      },
      screens: {
        xl: "1360px",
        "2xl": "none",
      },
      colors: {
        bgBlack: "#090909",
        accent: "#D89382",
        darkAccent: "#46302B",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
