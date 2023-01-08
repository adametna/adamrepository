import { Router } from "express";
import { Response, Request } from "express";
import {
  getProduct,
  createProduct,
  modifyProduct,
} from "../controllers/Product.controller";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  return await getProduct(req, res);
});

router.post("/", async (req: Request, res: Response) => {
  return await createProduct(req, res);
});

router.patch("/:id", async (req: Request, res: Response) => {
  return await modifyProduct(req, res);
});

export default router;
