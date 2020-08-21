// https://kyleamathews.github.io/typography.js/

import Typography from "typography"
import theme from 'typography-theme-funston'

const typography = new Typography({
  ...theme,
  headerFontFamily: [
    "Raleway",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Raleway", "serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontFamily: ['Avenir Next', 'sans-serif'].join(','),
      fontWeight: "100",
    },
    h2: {
      fontFamily: ['Times', 'sans-serif'].join(','),
    }
  }),
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['400'],
    }
  ],
})

export default typography