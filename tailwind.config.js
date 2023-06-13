/** @type {(tailwindConfig: object) => object} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme:{
    extend: {
        typography: {
            DEFAULT: {
                css: {
                    headings: {
                        color: "#FFF"
                    },

                },
            },
        },
    },

    colors: {
      'primary': '#312e81',
      'primary-dark': '#1e1b4b',
      'accent': '#d2d2d2',
      'accent-dark': "#D2D2D2",
      'secondary1': '#6A5ACD',
      'secondary': '#7c3aed',
      'navbar': "#2c2486",
      "section": "#5a4dab",
      "intro": "#28224d",
      "element": "#8a7fd2",
      "button": "#D2D2D2",
      "hover": "#BFBFBF",
    },

  },
  plugins: [ require('@tailwindcss/aspect-ratio'),

    require('@tailwindcss/typography'),

  ],
})



