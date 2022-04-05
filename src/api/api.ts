import axios from "axios";

import { REACT_APP_API_BASE_URL } from "constants/env";

const customAxios = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
  timeout: 10000,
});

export default customAxios;
