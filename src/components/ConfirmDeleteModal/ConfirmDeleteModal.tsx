import { FC } from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";

import {} from "./confirmDeleteModal.styles";

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
    <Dialog open={open}>
      <Box>
        <Typography>آیا از تصمیم خود مطمئن هستید؟</Typography>
      </Box>
      <Box>
        <Typography>
          برای حذف مسیر ارتباطی {social_id} لطفا تایید را بنویسید
        </Typography>
      </Box>
      <Box>
        <TextField />
      </Box>
      <Box>
        <Button onClick={deleteHandler}>حذف</Button>
        <Button onClick={close}>انصراف</Button>
      </Box>
    </Dialog>
  );
};

export default ConfirmDeleteModal;