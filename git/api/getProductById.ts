import { api } from "./api";

export const getProductById:  any = async (_id: String) => {
  const res = await api.get("/Product" + _id);
  return res;
};
