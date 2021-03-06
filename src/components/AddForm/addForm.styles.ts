import { SxProps, Theme } from "@mui/material";

export const root: SxProps<Theme> = (theme: Theme) => ({
  padding: 2,
  backgroundColor: theme.palette.grey[200],
  marginTop: 2,
});

export const rightTitles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
};

export const inputsContainer: SxProps<Theme> = (theme: Theme) => ({
  direction: "rtl",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: 1,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
});

export const input: SxProps<Theme> = (theme: Theme) => ({
  direction: "ltr",
  margin: "0 10px",
  flexGrow: 1,
  borderColor: "grey",
  [theme.breakpoints.down("sm")]: {
    margin: "10px",
    width: "100%",
  },
});

export const cancellButton: SxProps<Theme> = (theme: Theme) => ({
  marginLeft: 2,
  color: theme.palette.text.primary,
  borderColor: theme.palette.text.primary,
});

export const selectFormControl: SxProps<Theme> = (theme: Theme) => ({
  margin: "0 10px",
  maxWidth: 350,
});
