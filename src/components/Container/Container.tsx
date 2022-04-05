import { FC } from "react";
import { Box } from "@mui/material";

import { root } from "./container.styles";

const Container: FC = ({ children }) => {
  return <Box sx={root}>{children}</Box>;
};

export default Container;
