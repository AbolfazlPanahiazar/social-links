import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    secondary: {
      main: "#666",
    },
    warning: {
      main: "#ffa726",
    },
  },
  typography: {
    fontFamily: "vazir",
  },
});
