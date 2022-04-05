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
import {
  Twitter,
  Instagram,
  Facebook,
  Web,
  LinkedIn,
  Telegram,
} from "@mui/icons-material";

import {
  root,
  rightTitles,
  inputsContainer,
  input,
  cancellButton,
  selectFormControl,
} from "./editForm.styles";

const EditForm: FC = () => {
  return (
    <Paper sx={root}>
      <Box sx={rightTitles}>
        <Typography>ویرایش مسیر ارتباطی</Typography>
      </Box>
      <Box sx={inputsContainer}>
        <FormControl sx={selectFormControl}>
          <InputLabel id="select-label">نوع*</InputLabel>
          <Select
            color="primary"
            labelId="select-label"
            label="نوع*"
            IconComponent={Twitter}
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
          color="secondary"
          sx={input}
          variant="outlined"
          label="لینک"
        />
        <TextField
          color="secondary"
          sx={input}
          variant="outlined"
          label="(ID) آی دی"
        />
      </Box>
      <Box mt={2}>
        <Button variant="contained" color="warning">
          ویرایش مسیر ارتباطی
        </Button>
        <Button variant="outlined" sx={cancellButton}>
          انصراف
        </Button>
      </Box>
    </Paper>
  );
};

export default EditForm;
