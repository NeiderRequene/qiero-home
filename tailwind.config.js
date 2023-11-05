const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        indigo: {
          50: "#e5eef9",
          100: "#c6dcf1",
          200: "#93bfe6",
          300: "#599ed7",
          400: "#3483c3",
          500: "#2364a0",
          600: "#1e5286",
          700: "#1d476f",
          800: "#1d3d5d",
          900: "#13273e",
        },
        violet: {
          50: "#fbf6fd",
          100: "#f7ecfb",
          200: "#eed8f6",
          300: "#e2b9ee",
          400: "#d28fe3",
          500: "#bc65d2",
          600: "#a044b5",
          700: "#863695",
          800: "#702e7a",
          900: "#5e2a65",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
