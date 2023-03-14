/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#961c1c",
        dark: "#0F172A",
        secondary: "#64748b",
        light: "#CBD5E1",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
}
