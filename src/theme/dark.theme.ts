import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#666",
    },
    grey: {
      200: "#444",
    },
    warning: {
      main: "#ffa726",
    },
  },
  typography: {
    fontFamily: "vazir",
  },
});
