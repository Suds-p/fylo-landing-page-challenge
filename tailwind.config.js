/** @type {import('tailwindcss').Config} */
// Text shadow support solution from: https://www.hyperui.dev/blog/text-shadow-with-tailwindcss
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "curvy-desktop": "url(images/bg-curvy-desktop.svg)",
        "curvy-mobile": "url(images/bg-curvy-desktop.svg)"
      },
      boxShadow: {
        introBottom0: "var(--box-shadow-intro-bottom0)",
        introBottom1: "var(--box-shadow-intro-bottom1)",
        introBottom2: "var(--box-shadow-intro-bottom2)",
        introBottom3: "var(--box-shadow-intro-bottom3)"
      },
      colors: {
        introBg: "hsl(var(--intro-bg-color))",
        mainBg: "hsl(var(--main-bg-color))",
        footerBg: "hsl(var(--footer-bg-color))",
        buttonCyan: "hsl(var(--cyan))",
        buttonBlue: "hsl(var(--blue))",
        hoverCyan: "hsl(var(--hover-cyan))",
        testBg: "hsl(var(--testim-bg))"
      },
      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        sans: ["Open Sans", "sans-serif"]
      },
      textShadow: {
        DEFAULT: "1px 0 0 currentColor"
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

