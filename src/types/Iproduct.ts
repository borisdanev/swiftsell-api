export interface IProduct {
  name: string;
  price: number;
  coverImg: string;
  images: string[];
  category: "clothing" | "footwear" | "accessories";
  brand: string;
  sizes: string[];
  onSale: boolean;
  salePrice?: number;
}
