import { FC } from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";

import { root, container, buttonsContainer } from "./confirmDeleteModal.styles";

interface IConfirmDeleteModalProps {
  open: boolean;
  close: () => void;
  social_id: string;
  id: string;
}

const ConfirmDeleteModal: FC<IConfirmDeleteModalProps> = ({
  close,
  id,
  open,
  social_id,
}) => {
  const deleteHandler = () => {};

  return (
    <Dialog open={open} sx={root}>
      <Box sx={container}>
        <Box>
          <Typography fontSize={20}>آیا از تصمیم خود مطمئن هستید؟</Typography>
        </Box>
        <Box mt={2}>
          <Typography>
            برای حذف مسیر ارتباطی {social_id} لطفا تایید را بنویسید
          </Typography>
        </Box>
        <Box mt={2}>
          <TextField fullWidth color="warning" />
        </Box>
        <Box mt={2} sx={buttonsContainer}>
          <Button onClick={close} color="warning">
            انصراف
          </Button>
          <Button onClick={deleteHandler} color="error">
            حذف
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
