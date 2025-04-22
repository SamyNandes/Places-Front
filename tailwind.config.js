/** @type {import('tailwindcss').Config} */ // -> Importar tipagem do tailwind css

module.exports = {
  content: [
    "./src/**/*.{html, ts}"
  ],
  theme: {
    extend: {
      colors: {
        azulForte: '#0477BF',
        azulMenosForte: '#048ABF',
        azulPiscina: '#3C92A6',
        areia: '#BFB19F',
        azulClarinho: '#AED3F2',
        laranja: '#FAA100'
      }
    },
  },
  plugins: [],
}

