import { FC } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";

import {
  root,
  rightTitles,
  inputsContainer,
  input,
  cancellButton,
  selectFormControl,
} from "./editForm.styles";

interface IEditFormProps {
  collapse: () => void;
}

interface IFormValues {
  edit_type: string;
  edit_url: string;
  edit_id: string;
}

const EditForm: FC<IEditFormProps> = ({ collapse }) => {
  const formik = useFormik({
    initialValues: {
      edit_type: "",
      edit_url: "",
      edit_id: "",
    },
    onSubmit: (values: IFormValues) => {},
  });

  return (
    <Paper sx={root}>
      <Box sx={rightTitles}>
        <Typography>ویرایش مسیر ارتباطی</Typography>
      </Box>
      <Box sx={inputsContainer}>
        <FormControl sx={selectFormControl} fullWidth>
          <InputLabel id="select-label">نوع*</InputLabel>
          <Select
            name="edit_type"
            color="primary"
            labelId="select-label"
            label="نوع*"
            value={formik.values.edit_type}
            onChange={formik.handleChange}
          >
            <MenuItem value="instagram">اینستاگرام</MenuItem>
            <MenuItem value="facebook">فیسبوک</MenuItem>
            <MenuItem value="telegram">تلگرام</MenuItem>
            <MenuItem value="twitter">توییتر</MenuItem>
            <MenuItem value="linkedin">لینکدین</MenuItem>
            <MenuItem value="website">وبسایت</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="edit_url"
          color="secondary"
          sx={input}
          variant="outlined"
          label="لینک"
          value={formik.values.edit_url}
          onChange={formik.handleChange}
        />
        <TextField
          name="edit_id"
          color="secondary"
          sx={input}
          variant="outlined"
          label="(ID) آی دی"
          value={formik.values.edit_id}
          onChange={formik.handleChange}
        />
      </Box>
      <Box mt={2}>
        <Button variant="contained" color="warning">
          ویرایش مسیر ارتباطی
        </Button>
        <Button variant="outlined" sx={cancellButton} onClick={collapse}>
          انصراف
        </Button>
      </Box>
    </Paper>
  );
};

export default EditForm;
