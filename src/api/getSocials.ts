import { AxiosResponse } from "axios";

import { ISocial } from "typescript";
import api from "./api";

type IResponse = ISocial[];

export const getSocials = () =>
  api.get<never, AxiosResponse<IResponse>>("/socials");
