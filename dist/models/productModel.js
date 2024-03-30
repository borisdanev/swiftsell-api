"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
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
exports.Product = (0, mongoose_1.model)("Product", productSchema);
