import { RequestHandler } from "express";
import { Product } from "../models/productModel";
import { IProduct } from "../types/Iproduct";
export const getProducts: RequestHandler = async (req, res, next) => {
  try {
    const { id, category, brand, onSale } = req.query;
    let products: IProduct | IProduct[] = [];
    if (id) products = (await Product.findById(id)) as IProduct;
    else {
      const productList = (await Product.find({})) as IProduct[];
      if (category)
        products = productList.filter(
          (product) => product.category === category
        );
      else if (brand)
        products = productList.filter((product) => product.brand === brand);
      else if (onSale)
        products = productList.filter((product) => product.onSale);
      else products = productList;
    }
    res.status(200).json(products);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
