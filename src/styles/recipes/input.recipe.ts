import { defineRecipe, RecipeVariantProps } from "@chakra-ui/react";
import { FormTextInputProps } from "@omniumcultural/form-tools";

export const inputRecipe = defineRecipe({
  base: {
    h: "40px",
    px: "10px",
    textAlign: "left",
    fontSize: "base",
    border: "1px solid",
  },

  variants: {
    customSize: {
      full: { w: "100%" },
      auto: { w: "auto" },
    },
    visual: {
      primary: {
        bg: "white",
        color: "black",
        border: "1px solid",
        borderColor: "black",
        borderRadius: "5px",
      },
      secondary: {
        bg: "white",
        color: "black",
        borderBottom: "1px solid",
        borderColor: "transparent",
        borderBottomColor: "black",
      },
    },
  },
});

type CustomInputTextVariantProps = RecipeVariantProps<typeof inputRecipe>;

export type CustomInputTextProps = FormTextInputProps &
  CustomInputTextVariantProps;
