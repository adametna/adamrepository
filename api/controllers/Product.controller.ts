import Product from "../db/models/Product";
import { Request, Response } from "express";

export async function getProduct(req: Request, res: Response) {
  const allProduct = await Product.find({});
  if (allProduct) {
    return res.send(allProduct);
  }
  return res.status(404).send("product not found");
}

export async function getProductById(req: Request, res: Response) {
  const id = req.params.id;
  const productById = await Product.findOne({ _id: id });
  if (productById) {
    return res.send(productById);
  }
  return res.status(404).send("product id not found");
}

export async function createProduct(req: Request, res: Response) {
  const chouflProduct: any = req.body;
  if (chouflProduct.name && chouflProduct.price && chouflProduct.image) {
    const newProduct = await Product.create({
      name: chouflProduct.name,
      price: chouflProduct.price,
      image: chouflProduct.image,
      categoryName: chouflProduct.categoryName,
    });
    return res.send(newProduct);
  }
  return res.status(404).send("product cant be created");
}

export async function modifyProduct(req: Request, res: Response) {
  const id = req.params.id;

  const price = req.body.price;
  if (price) {
    const result = await Product.findOneAndUpdate(
      { _id: id },
      { $set: { price: price } }
    );
    return res.send(result);
  } else {
    return res.status(404).send("No price to update");
  }
}
