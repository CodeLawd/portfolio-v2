/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#5FF1D0",
        gray: "#CCD6F6",
      },
      fontFamily: {
        sfmono: ["SF Mono", "monospace"],
        calibreBlack: ["Calibre Black", "sans-serif"],
        calibre: ["Calibre", "sans-serif"],
      },
    },
  },
  plugins: [],
}
