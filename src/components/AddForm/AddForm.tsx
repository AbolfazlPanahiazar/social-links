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
} from "./addForm.styles";

interface IFormValues {
  add_type: string;
  add_url: string;
  add_id: string;
}

const AddForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      add_type: "",
      add_url: "",
      add_id: "",
    },
    onSubmit: (values: IFormValues) => {},
  });

  return (
    <Paper sx={root}>
      <Box sx={rightTitles}>
        <Typography>افزودن مسیر های ارتباطی</Typography>
      </Box>
      <Box sx={inputsContainer}>
        <FormControl sx={selectFormControl}>
          <InputLabel id="select-label">نوع*</InputLabel>
          <Select
            name="add_type"
            color="primary"
            labelId="select-label"
            label="نوع*"
            value={formik.values.add_type}
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
          name="add_url"
          color="secondary"
          sx={input}
          variant="outlined"
          label="لینک"
          value={formik.values.add_url}
          onChange={formik.handleChange}
        />
        <TextField
          name="add_id"
          color="secondary"
          sx={input}
          variant="outlined"
          label="(ID) آی دی"
          value={formik.values.add_id}
          onChange={formik.handleChange}
        />
      </Box>
      <Box mt={2}>
        <Button variant="contained" color="warning">
          ثبت مسیر ارتباطی
        </Button>
        <Button variant="outlined" sx={cancellButton}>
          انصراف
        </Button>
      </Box>
    </Paper>
  );
};

export default AddForm;
