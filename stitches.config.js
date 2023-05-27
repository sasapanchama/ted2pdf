import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      primary: "#1BB299",
      white: "#FFFFFF",
    },
  },
});

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  "input, textarea, button": {
    all: "unset",
    boxSizing: "border-box",
  },
  "body, html": {
    backgroundColor: "black",
  },
});
