/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "Exo": ['Exo'],
        'Poppins': ['Poppins'],
        "Roboto_Mono": ['Roboto Mono']
      },
    },
  },
  plugins: [],
}

