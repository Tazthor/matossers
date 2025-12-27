import { defineRecipe } from "@chakra-ui/react";
import type {
  RecipeVariantProps,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";

export const headingRecipe = defineRecipe({
  base: {
    fontFamily: "heading",
    fontWeight: "bold",
  },
  variants: {
    type: {
      h1: {
        fontSize: "huge",
        lineHeight: "none",
      },
      h2: {
        fontSize: "superbig",
        lineHeight: "normal",
      },
      h3: {
        fontSize: "big",
        lineHeight: "normal",
      },
      h4: {
        fontFamily: "body",
        fontWeight: "normal",
        fontSize: "xxxl",
        lineHeight: "100%",
      },
      h5: {
        fontFamily: "body",
        fontWeight: "bold",
        fontSize: "xl",
        lineHeight: "normal",
      },
      h6: {
        fontFamily: "body",
        fontWeight: "bold",
        fontSize: "lg",
        lineHeight: "normal",
      },
      body: {
        fontSize: "base",
        lineHeight: "normal",
      },
      menu: {
        fontSize: "xxl",
        lineHeight: "normal",
      }
    },
  },
});

type CustomHeadingVariantProps = RecipeVariantProps<typeof headingRecipe>;

export type HeadingProps = Omit<ChakraHeadingProps, "type"> &
  CustomHeadingVariantProps;
