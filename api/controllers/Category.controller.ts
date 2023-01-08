import Category from "../db/models/Category";
import { Request, Response } from "express";

export async function getCategory(req: Request, res: Response) {
  const allCategory = await Category.find({});
  if (allCategory) {
    return res.send(allCategory);
  }
  return res.status(404).send("category not found");
}

export async function createCategory(req: Request, res: Response) {
  const chouflCategory: any = req.body;
  if (chouflCategory.name) {
    const newCategory = await Category.create({
      name: chouflCategory.name,
    });
    return res.send(newCategory);
  }
  return res.status(404).send("category cant be created");
}
