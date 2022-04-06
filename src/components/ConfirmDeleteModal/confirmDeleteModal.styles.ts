import { SxProps, Theme } from "@mui/material";

export const root: SxProps<Theme> = (theme: Theme) => ({
  direction: "rtl",
});

export const container: SxProps<Theme> = (theme: Theme) => ({
  padding: 2,
});

export const buttonsContainer: SxProps<Theme> = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});
