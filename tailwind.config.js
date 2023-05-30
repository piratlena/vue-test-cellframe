/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D3037", //background color
        secondary: "#363A42", //table-color
        "grey-light-1": "#757184", //text and table-lines
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
