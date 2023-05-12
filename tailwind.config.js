/** @type {(tailwindConfig: object) => object} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme:{
    extend:{},
    colors: {
      'primary': '#312e81',
      'primary-dark': '#1e1b4b',
      'accent': '#E6E6E6',
      'secondary1': '#6A5ACD',
      'secondary': '#7c3aed',

    },
  },
  plugins: [ require('@tailwindcss/aspect-ratio'),],
});



