import api from "./axios";

export const getSchools = async (page = 1) => {
  const response = await api.get(`/schools?page=${page}`);
  return response.data;
};