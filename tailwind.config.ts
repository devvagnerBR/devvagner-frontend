// tailwind.config.js
/** @type {import('tailwindcss').Config} */


export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", "/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins'],
        "Roboto_Mono": ['Roboto Mono'],
        "Jost": ["Jost", "sans-serif"],
        "Sarala": ["Sarala", "sans-serif"]
      }, screens: {
        "window": '960px'
      }, colors: {
        secondary: {
          "600": "#525252",
          "500": "#666666",
          "400": "#7D7D7D",
          "300": "#C1C1C1",
          "200": "#F8F8F8",
          "100": "#F0F0F0",
          "50": "#FFFFFF",
        }, primary: {
          "500": "#0a66CD"
        }
      }


    },
  },
  plugins: [],
};
