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
    marro: {100: "#f7d9c5", 300: '#d0a499',500: '#663b30'},
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
  components: {
    Button: {
      baseStyle: {
        textAlign: "center",
        borderRadius: "6px",
        border: "1px solid",
      },
      sizes: {
        auto: {
          h: "45px",
          w: "auto",
          px: "30px",
        },
        normal: {
          h: "45px",
          minW: "198px",
          px: "30px",
        },
        large: {
          h: "45px",
          minW: "280px",
          px: "70px",
        },
        circle: {
          h: "76px",
          w: "76px",
          px: "10px",
        },
        full: {
          h: "45px",
          w: "100%",
          px: "30px",
        },
      },
      variants: {
        primary: {
          bg: "argila",
          color: "blanc",
          borderColor: "argila",
          _hover:{ bg: "white", color: "argila" },
          _focus:{ boxShadow: "none" }
          },
        secondary: {
          bg: "transparent",
          color: "blanc",
          borderColor: "blanc",
          _hover:{ bg: "white", color: "argila" },
          _focus:{ boxShadow: "none" }
        }
      },
      defaultProps: {
        variant: "solidPrimary",
        colorScheme: "green",
      },
    },
  },
})

export default theme
