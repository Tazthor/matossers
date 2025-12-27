import { defaultConfig, defineConfig, createSystem } from "@chakra-ui/react";
import { buttonRecipe } from "./recipes/button.recipe";
import { headingRecipe } from "./recipes/heading.recipe";
import { inputRecipe } from "./recipes/input.recipe";
import { selectRecipe } from "./recipes/select.recipe";
import { Merriweather_Sans } from "next/font/google";



const MerriweatherMedium = Merriweather_Sans({
  weight: "300",
  subsets: ["latin"],
});

const MerriweatherBold = Merriweather_Sans({
  weight: "600",
  subsets: ["latin"],
});


const config = defineConfig({
  strictTokens: true,
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      bg: "secondary",
    },
  },
  theme: {
    recipes: {
      button: buttonRecipe,
      select: selectRecipe,
      input: inputRecipe,
      heading: headingRecipe,
    },
    tokens: {
       colors: {
    blanc: '#fff',
    negre: '#000',
    marro: {100: "#f7d9c5", 300: '#d0a499',500: '#663b30'},
    argila: '#663b30',
    gris: {100: "#f5f5f5", 300: "#e0e0e0", 500: "#9e9e9e", 700: "#616161", 900: "#212121"},
    groc: {
        brillant: "#f8e93b",
        mat: "#f7da65"
      }
  },
      fonts: {
        body: MerriweatherMedium.style.fontFamily,
        heading: MerriweatherBold.style.fontFamily,
      },
      breakpoints: {
        sm: "450px",
        lw: "600px",
        md: "769px",
        lg: "976px",
        xl: "1080px",
        "2xl": "1440px",
      },
      fontWeight: {
        thin: 100,
        normal: 300,
        medium: 400,
        semibold: 500,
        bold: 600,
        black: 900,
      },
      fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        base: "18px",
        medium: "20px",
        lg: "24px",
        lg_xl: "32px",
        xl: "36px",
        xxl: "40px",
        xxxl: "50px",
        big: "80px",
        superbig:"150px",
        huge: "200px",
      },
      lineHeights: {
        normal: "normal",
        none: "1",
        shorter: "1.25",
        short: "1.375",
        base: "1.5",
        tall: "1.625",
        taller: "2",
      },
      letterSpacings: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
    },
  },
});

export default createSystem(defaultConfig, config);
