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
      primary: {
        border: "1px solid",
        borderColor: "argila",
        backgroundColor: "argila",
        borderRadius: "6px",
        color: "white",
        _hover: {
          backgroundColor: "argila",
        },
      },
      primary_outline: {
        backgroundColor: "transparent",
        color: "white",
        border: "1px solid",
        borderColor: "white",
        borderRadius: "6px",
        _hover: {
          backgroundColor: "argila",
          borderColor: "argila",
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