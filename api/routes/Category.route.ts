import { Router } from "express";
import { Response, Request } from "express";
import {
  getCategory,
  createCategory,
} from "../controllers/Category.controller";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  return await getCategory(req, res);
});

router.post("/", async (req: Request, res: Response) => {
  return await createCategory(req, res);
});

export default router;
