import { Router } from "express";
import product from "./routes/Product.route";
import category from "./routes/Category.route";
import user from "./routes/User.route";

const route = Router();

route.use("/product", product);

route.use("/category", category);

route.use("/user", user);

export default route;
