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
  if (
    chouflProduct.name &&
    chouflProduct.price &&
    chouflProduct.image &&
    chouflProduct.categoryName
  ) {
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
  const product: any = await Product.findOne({ _id: id });

  let name = req.body.name;
  let price = req.body.price;
  let image = req.body.image;
  let categoryName = req.body.categoryName;

  if (!name) {
    name = product.name;
  }

  if (!price) {
    price = product.price;
  }

  if (!image) {
    price = product.image;
  }

  if (!categoryName) {
    price = product.categoryName;
  }

  const result = await Product.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        price: price,
        name: name,
        image: image,
        categoryName: categoryName,
      },
    }
  );

  if (result) {
    return res.send(result);
  }

  return res.status(404).send("cant upadate product");
}
