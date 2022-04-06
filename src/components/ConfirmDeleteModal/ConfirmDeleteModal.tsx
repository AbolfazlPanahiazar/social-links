import { FC } from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

import { deleteSocial } from "api";
import { root, container, buttonsContainer } from "./confirmDeleteModal.styles";

interface IConfirmDeleteModalProps {
  open: boolean;
  close: () => void;
  social_id: string;
  id: string;
  refetch: () => void;
}

interface IFormValues {
  taeed: string;
}

const ConfirmDeleteModal: FC<IConfirmDeleteModalProps> = ({
  close,
  id,
  open,
  social_id,
  refetch,
}) => {
  const formik = useFormik({
    initialValues: {
      taeed: "",
    },
    onSubmit: (values: IFormValues) => {
      if (values.taeed && values.taeed === "تایید") {
        deleteSocial(id)
          .then(() => {
            close();
            refetch();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        formik.resetForm();
      }
    },
  });

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
          <TextField
            name="taeed"
            fullWidth
            color="warning"
            value={formik.values.taeed}
            onChange={formik.handleChange}
          />
        </Box>
        <Box mt={2} sx={buttonsContainer}>
          <Button onClick={close} color="warning">
            انصراف
          </Button>
          <Button onClick={formik.submitForm} color="error">
            حذف
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
