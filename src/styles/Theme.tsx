type Colors = {
  background: string;
  button: string;
  invalid: string;
  accentText: string;
  brackets: string;
  darkText: string;
  gray: string;
};

type Fonts = {
  title: string;
};

export type ThemeType = {
  colors: Colors;
  fonts: Fonts;
};

export const Theme: ThemeType = {
  colors: {
    background: "#FFFFFF",
    button: "#D1D5DB",
    invalid: "#BF0E0E",
    accentText: "#4E9590",
    brackets: "#F2CAB8",
    darkText: "#000000",
    gray: "#BFBFBF",
  },
  fonts: {
    title: "Inter, sans-serif",
  },
};
