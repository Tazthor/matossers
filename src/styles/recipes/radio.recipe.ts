import { defineSlotRecipe } from "@chakra-ui/react";

export const radioRecipe = defineSlotRecipe({
  slots: ["root", "label", "indicator", "item", "itemText", "control"],
  base: {
    root: {},
    indicator: {
      border: "1px solid black",
    },
    label: { color: "black" },
    control: {
      borderColor: "black",
      border: "1px solid black",
    },
  },
  variants: {
    visual: {
      primary: {
        root: {
          colorPalette: "gray", // Override default color palette
        },
        indicator: {
          border: "1px solid black",
        },
        control: {
          borderColor: "black !important",
          border: "1px solid black !important",
          _checked: {
            borderColor: "black !important",
            bg: "white",
          },
        },
      },
    },
  },
});
