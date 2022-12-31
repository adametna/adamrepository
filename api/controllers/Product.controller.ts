import Product from "../db/models/Product";
import { Request, Response } from "express";

export async function getProduct(req: Request, res: Response) {
  const allProduct = await Product.find({});
  if (allProduct) {
    return res.send(allProduct);
  }
  return res.status(404).send("product not found");
}

export async function createProduct(req: Request, res: Response) {
  const chouflProduct: any = req.body;
  if (chouflProduct.name && chouflProduct.price && chouflProduct.image) {
    const newProduct = await Product.create({
      name: chouflProduct.name,
      price: chouflProduct.price,
      image: chouflProduct.image,
    });
    return res.send(newProduct);
  }
  return res.status(404).send("product cant be created");
}
