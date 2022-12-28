/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#8a1538",
        dimWhite: "#faebd7",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        groupA: '#490b61',
        groupB: '#4bbfb2',
        groupC: '#ee1450',
        groupD: '#fcb815',
        groupE: '#8e1737',
        groupF: '#00a64e',
        groupG: '#1d65b1',
        groupH: '#f080b2',
        error: '#ff0000',
        correct: '#009929'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        '3xl': '2px 2px 5px rgba(124, 124, 124)',
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};