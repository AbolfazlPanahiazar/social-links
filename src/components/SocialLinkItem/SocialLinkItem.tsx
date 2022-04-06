import { FC } from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import LogoGenerator from "helpers/LogoGenerator";
import {
  socialTypeTitle,
  socialTypeIdentifier,
} from "helpers/socialTypeIndentifier";
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
  onDelete: () => void;
}

const SocialLinkItem: FC<ISocialLinkItem> = ({ social, onDelete }) => {
  return (
    <Paper sx={root}>
      <Box sx={wrapper}>
        <Box ml={2}>
          <LogoGenerator logo={socialTypeIdentifier(social.social_link)} />
        </Box>
        <Box ml={2}>
          <Typography fontSize={14} sx={text}>
            {socialTypeTitle(social.social_link)}
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
        <Button sx={deleteButton} onClick={onDelete}>
          <Delete />
          <Typography fontSize={14}>حذف</Typography>
        </Button>
      </Box>
    </Paper>
  );
};

export default SocialLinkItem;
