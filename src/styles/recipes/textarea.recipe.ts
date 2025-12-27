import { defineRecipe, RecipeVariantProps } from "@chakra-ui/react";
import { FormTextAreaInputProps } from "@omniumcultural/form-tools";

export const textareaRecipe = defineRecipe({
  base: {
    minH: "120px",
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
type CustomTextareaVariantProps = RecipeVariantProps<typeof textareaRecipe>;
export type CustomTextareaProps = FormTextAreaInputProps &
  CustomTextareaVariantProps;
