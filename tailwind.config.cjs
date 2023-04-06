/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#14213D",
        tertiary: "#FCA311",
        quaternary: "#E5E5E5",
        pentanary: "#FFFFFF" 
      }
    },
  },
  plugins: [],
}
