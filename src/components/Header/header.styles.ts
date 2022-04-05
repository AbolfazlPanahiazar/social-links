import { SxProps, Theme } from "@mui/material";

export const root: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 30px",
  alignItems: "center",
};

export const iconContainer: SxProps<Theme> = {
  color: "#aaa",
  display: 'flex',
  alignItems: 'center'
};

export const toggleThemeButton: SxProps<Theme> = (theme: Theme) => ({
  color: theme.palette.text.primary,
});
