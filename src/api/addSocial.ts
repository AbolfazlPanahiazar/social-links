import { AxiosResponse } from "axios";

import api from "./api";

interface IBody {
  social_id: string;
  social_link: string;
}

interface IResponse {}

export const addSocial = (social_id: string, social_link: string) => {
  return api.post<IBody, AxiosResponse<IResponse>>("/socials", {
    social_id,
    social_link,
  });
};
