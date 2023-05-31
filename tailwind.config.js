/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D3037", //background color app
        secondary: "#363A42", //table-color
        background: "#3C3B3B",
        "grey-light-1": "#757184", //text and table-lines, placeholder
        "grey-light-2": "#B0AEB9", //disabled buttons
        white: "#FFFFFF", //text
        "purple-def-1": "#9580FF",
        "purple-def-2": "#A361FF",
        "purple-hover-1": "#9580FF",
        "purple-hover-2": "#BD91FC",
        "purple-pressed-1": "#7930DE",
        "purple-pressed-2": "#7F65FF",
        "green-1": "#A9E81C", //indicator
        "green-2": "#8ECC00", //indicator
        "grey-dark-1": "#2E3138", //line in the table
      },
      boxShadow: {
        innerLightShadow:
          "-1px -1px  0 0  rgba(82, 77, 100, 1), 5px 5px 10px 0 rgba(8, 7, 13, 0.42)",
        clickShadow:
          "inset 3px 3px 5px 0 rgba(8, 7, 13, 0.25), 1px 1px 0 0 rgba(107, 102, 126, 0.49)",
      },
    },
    fontFamily: {
      Quicksand: ["Quicksand, sans-serif"],
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
