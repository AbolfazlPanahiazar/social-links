import { SxProps, Theme } from "@mui/material";

export const root: SxProps<Theme> = (theme: Theme) => ({
  backgroundColor: theme.palette.grey[200],
  direction: "rtl",
  padding: 2,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
});

export const wrapper: SxProps<Theme> = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
});

export const text: SxProps<Theme> = (theme: Theme) => ({
  direction: "ltr",
  color: theme.palette.text.primary,
});

export const leftAlignText: SxProps<Theme> = (theme: Theme) => ({
  direction: "ltr",
});

export const editButton: SxProps<Theme> = (theme: Theme) => ({
  color: theme.palette.warning.main,
});

export const deleteButton: SxProps<Theme> = (theme: Theme) => ({
  color: theme.palette.error.main,
});

export const keyValueWrapper: SxProps<Theme> = (theme: Theme) => ({
  display: "flex",
  marginLeft: 2,
});

export const buttonsWrapper: SxProps<Theme> = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
});
