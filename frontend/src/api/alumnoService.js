import api from "./axios";

export const getAlumnos = async () => {
  const response = await api.get("/alumnos");
  return response.data;
};