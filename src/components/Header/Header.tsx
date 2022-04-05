import { FC } from "react";
import { Box, Avatar, IconButton } from "@mui/material";
import { Search as SearchIcon, LightMode, DarkMode } from "@mui/icons-material";

import { useToggleTheme, useTheme } from "hooks";
import { root, iconContainer, toggleThemeButton } from "./header.styles";

const Header: FC = () => {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  return (
    <Box component="header" sx={root}>
      <Box>
        <Avatar src="https://picsum.photos/200/300?random=1" />
      </Box>
      <Box sx={iconContainer}>
        <IconButton sx={toggleThemeButton} onClick={toggleTheme}>
          {theme === "light" ? (
            <DarkMode color="inherit" />
          ) : (
            <LightMode color="inherit" />
          )}
        </IconButton>
        <SearchIcon color="inherit" />
      </Box>
    </Box>
  );
};

export default Header;
