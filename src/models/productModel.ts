import { Schema, Model, model } from "mongoose";
import { IProduct } from "../types/Iproduct";
type ProductModel = Model<IProduct>;
const productSchema: Schema = new Schema<IProduct, ProductModel>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  coverImg: { type: String, required: true },
  images: { type: [String], required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  sizes: { type: [String], requried: true },
  onSale: { type: Boolean, required: true },
  salePrice: { type: Number, requried: false },
});
export const Product: ProductModel = model<IProduct, ProductModel>(
  "Product",
  productSchema
);
