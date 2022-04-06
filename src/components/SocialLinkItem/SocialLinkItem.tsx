import { FC } from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";

import {
  root,
  wrapper,
  leftAlignText,
  text,
  editButton,
  deleteButton,
  keyValueWrapper,
  buttonsWrapper,
} from "./socialLinkItem.stylese";
import { ISocial } from "typescript";

interface ISocialLinkItem {
  social: ISocial;
}

const SocialLinkItem: FC<ISocialLinkItem> = ({ social }) => {
  return (
    <Paper sx={root}>
      <Box sx={wrapper}>
        <Box ml={2}>
          <Twitter sx={text} />
        </Box>
        <Box ml={2}>
          <Typography fontSize={14} sx={text}>
            توییتر
          </Typography>
        </Box>
        <Box sx={keyValueWrapper}>
          <Typography fontSize={14} ml={1} color="GrayText">
            آی دی (ID):
          </Typography>
          <Typography fontSize={14} sx={leftAlignText}>
            {social.social_id}
          </Typography>
        </Box>
        <Box sx={keyValueWrapper}>
          <Typography fontSize={14} ml={1} color="GrayText">
            لینک:
          </Typography>
          <Typography fontSize={14} sx={leftAlignText} color="orange">
            {social.social_link}
          </Typography>
        </Box>
      </Box>
      <Box sx={buttonsWrapper}>
        <Button sx={editButton}>
          <Edit />
          <Typography fontSize={14}>ویرایش</Typography>
        </Button>
        <Button sx={deleteButton}>
          <Delete />
          <Typography fontSize={14}>حذف</Typography>
        </Button>
      </Box>
    </Paper>
  );
};

export default SocialLinkItem;
