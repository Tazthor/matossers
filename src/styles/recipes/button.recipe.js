import { defineRecipe } from "@chakra-ui/react"

export const buttonRecipe = defineRecipe({
  base: {
    textAlign: "center",
    borderRadius: "25px",
    fontSize: "base",
    border: "1px solid",
  },
  variants: {
    visual: {
      brand: {
        backgroundColor: "brand",
        color: "white",
        borderColor: "brand",
        border: "0",
        _hover: {
          backgroundColor: "transparent",
          color: "brand",
          border: "1px solid",
          borderColor: "brand",
        },
      },
      brand_static: {
        backgroundColor: "brand",
        color: "white",
        borderColor: "brand",
        border: "0",
      },
      brand_outline: {
        backgroundColor: "secondary",
        color: "brand",
        border: "1px solid",
        borderColor: "brand",
        _hover: {
          backgroundColor: "brand",
          borderColor: "brand",
          color: "white",
        },
      },
      primary: {
        border: "0",
        backgroundColor: "primary",
        color: "white",
        _hover: {
          backgroundColor: "brand",
        },
      },
      primary_outline: {
        backgroundColor: "transparent",
        color: "primary",
        border: "1px solid",
        borderColor: "primary",
        _hover: {
          backgroundColor: "primary",
          borderColor: "primary",
          color: "white",
        },
      },
      transparent: {
        backgroundColor: "transparent",
        color: "primary",
        border: "none",
        _hover: {
          backgroundColor: "transparent",
          color: "secondary_normal",
        },
      },
      danger: {
        backgroundColor: "danger",
        color: "white",
        borderColor: "danger",
        _hover: {
          backgroundColor: "transparent",
          color: "danger",
          border: "1px solid",
        },
      },
      danger_outline: {
        backgroundColor: "transparent",
        color: "danger",
        border: "1px solid",
        borderColor: "danger",
        _hover: {
          backgroundColor: "danger",
          borderColor: "danger",
          color: "white",
        },
      },
    },
    size: {
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
      circle: {
        h: "122px",
        w: "122px",
        px: "10px",
        borderRadius: "50%",
      },
      circleSmall: {
        h: "81px",
        w: "81px",
        px: "10px",
        borderRadius: "50%",
      },
      full: {
        h: "45px",
        w: "100%",
        px: "30px",
      },
      tall: {
        h: "70px",
        w: "100%",
        px: "20px",
      },
      short: {
        h: "36px",
        w: "auto",
        px: "10px",
      },
    },
  },
  defaultVariants: {
    visual: "primary",
    size: "auto",
  },
});