import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    available: Palette["primary"];
    reserved: Palette["primary"];
    inuse: Palette["primary"];
    unavailable: Palette["primary"];
  }

  interface PaletteOptions {
    available?: PaletteOptions["primary"];
    reserved?: PaletteOptions["primary"];
    inuse?: PaletteOptions["primary"];
    unavailable?: Palette["primary"];
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    available: true;
    reserved: true;
    inuse: true;
    unavailable: true;
  }
}

export const theme = createTheme({
  palette: {
    available: {
      main: "#3B833B",
      light: "CEFFCE",
      dark: "#105A10",
      contrastText: "#000000",
    },
    reserved: {
      main: "#C8B577",
      light: "#C8B577",
      dark: "#B99623",
      contrastText: "#000000",
    },
    inuse: {
      main: "#B86161",
      light: "#B86161",
      dark: "#990D0D",
      contrastText: "#000000",
    },
    unavailable: {
      main: "#827D7D",
      light: "#000000",
      dark: "#000000",
      contrastText: "#000000",
    },
  },
});
