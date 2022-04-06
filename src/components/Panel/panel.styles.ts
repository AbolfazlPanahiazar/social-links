import { SxProps, Theme } from "@mui/material";

export const root: SxProps<Theme> = (theme: Theme) => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  paddingTop: 15,
});

export const container: SxProps<Theme> = (theme: Theme) => ({
  width: 1000,
  maxWidth: "95%",
});

export const rightTitles: SxProps<Theme> = (theme: Theme) => ({
  display: "flex",
  justifyContent: "right",
  direction: "rtl",
});

export const paper: SxProps<Theme> = (theme: Theme) => ({
  marginTop: 3,
  boxShadow: 2,
  padding: 2,
});

export const panelStateTitle: SxProps<Theme> = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
});

export const panelStateIcon: SxProps<Theme> = (theme: Theme) => ({
  marginLeft: 1,
});

export const primaryText: SxProps<Theme> = (theme: Theme) => ({
  color: theme.palette.text.primary,
});

export const formStateButton: SxProps<Theme> = (theme: Theme) => ({
  color: theme.palette.warning.main,
});
