import api from "./api";

export const deleteSocial = (id: string) => api.delete(`/socials/${id}`);
