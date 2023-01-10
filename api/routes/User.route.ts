import { Router } from "express";
import { Response, Request } from "express";
import { createUser, getUser, getUserById, modifyUser } from "../controllers/User.controller";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  return await getUser(req, res);
});

router.get("/:id", async (req: Request, res: Response) => {
  return await getUserById(req, res);
});

router.post("/", async (req: Request, res: Response) => {
  return await createUser(req, res);
});

router.patch("/:id", async (req: Request, res: Response) => {
  return await modifyUser(req, res);
});

export default router;
