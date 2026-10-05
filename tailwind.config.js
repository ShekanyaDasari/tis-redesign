/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tis: {
          navy: "#0A192F",
          deep: "#050C1A",
          gold: "#D4AF37",
          goldLight: "#F3E5AB",
          slate: "#8892B0",
          lightSlate: "#CCD6F6",
          white: "#F8FAFC",
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
}