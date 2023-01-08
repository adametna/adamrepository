import { Router } from "express";
import product from "./routes/Product.route";
import category from "./routes/Category.route";

const route = Router();

route.use("/product", product);

route.use("/category", category);

export default route;
