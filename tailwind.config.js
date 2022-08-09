/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#FAC748",
        // secondary: "#ccf281",
        gray: "#CCD6F6",
      },
      fontFamily: {
        sfmono: ["SF Mono", "monospace"],
        mouse: ["Mouse Memoirs", "sans-serif"],
        // calibreBlack: ["Calibre Black", "sans-serif"],
        // calibre: ["Calibre", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
