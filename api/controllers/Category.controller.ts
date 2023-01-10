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

export async function modifyCategory(req: Request, res: Response) {
  const id = req.params.id;
  const category: any = await Category.findOne({ _id: id });

  let name = req.body.name;

  const result = await Category.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name: name,
      },
    }
  );

  if (result) {
    return res.send(result);
  }

  return res.status(404).send("cant update category");
}
