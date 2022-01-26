import { extendTheme } from "@chakra-ui/react"

const fonts =   {
  body: "'Inter', sans-serif",
  heading: "Inter, sans-serif",
  mono: "Menlo, monospace",
}

const breakpoints = ['450px', '769px', '1080px']

const theme = extendTheme({
  colors: {
    taronja: {500: '#ff6320'}
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
