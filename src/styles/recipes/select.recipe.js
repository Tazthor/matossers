import { defineSlotRecipe } from "@chakra-ui/react";

export const selectRecipe = defineSlotRecipe({
  slots: ["root", "indicator", "control", "input", "item"],
  base: {
    root: {
      w: "100%",
      h: "60px",
    },
    input: { border: "1px solid", borderRadius: "5px" },
  },
  variants: {
    visual: {
      primary: {
        indicator: { color: "primary" },
        input: { borderColor: "black" },
        item: {
          position:"relative",
          _hover: {bg: "primary", color: "white"},
        }
      },
    },
  },
});
