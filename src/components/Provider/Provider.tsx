import { FC } from "react";
import { ThemeProvider } from "@mui/material";

import { useTheme } from "hooks";
import { lightTheme, darkTheme } from "theme";

const Provider: FC = ({ children }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Provider;
