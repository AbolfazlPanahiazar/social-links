import api from "./api";
import { AxiosResponse } from "axios";

interface IBody {
  social_id: string;
  social_link: string;
}

interface IResponse {}

export const editSocial = (
  social_id: string,
  social_link: string,
  id: string
) => {
  return api.put<IBody, AxiosResponse<IResponse>>(`/socials/${id}`, {
    social_id,
    social_link,
  });
};
