import { extendTheme } from "@chakra-ui/react"

const fonts =   {
  body: "Merriweather+Sans, sans-serif",
  heading: "Merriweather+Sans, sans-serif",
  mono: "Menlo, monospace",
}

const breakpoints = {
  sm: '450px',
  lw: '600px',
  md: '769px',
  lg: '976px',
  xl: '1080px',
  xxl: '1440px'
}
const theme = extendTheme({
  colors: {
    blanc: '#fff',
    negre: '#000',
    argila: '#663b30',
    groc: {
        brillant: "#f8e93b",
        mat: "#f7da65"
      }
  },
  fonts,
  fontWeights: {
    thin: 100,
    normal: 300,
    medium: 400,
    semibold: 500,
    bold: 600,
    black: 900,
  },
  fontSizes: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    normal: "16px",
    medium:"18px",
    lg: "20px",
    xl: "24px",
    xxl: "30px",
    xxxl: "40px",
    big: "45px",
    huge: "80px",
  },
  breakpoints,
})

export default theme
