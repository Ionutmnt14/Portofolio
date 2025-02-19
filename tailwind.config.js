/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:["Montserrat", "sans-serif"]
      },
      colors: {
        background: "#0d1117",
        text: "#e6edf3",
        neon: "#58a6ff",
        electric: "#1f6feb",
        soft: "#161b22",
      },
    },
  },
  plugins: [],
}