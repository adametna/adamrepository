import { api } from "./api";

export const getProduct = async () => {
  return await api.get("/product");
};
