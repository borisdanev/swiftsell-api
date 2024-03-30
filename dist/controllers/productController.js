"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const productModel_1 = require("../models/productModel");
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, category, brand, onSale } = req.query;
        let products = [];
        if (id)
            products = (yield productModel_1.Product.findById(id));
        else {
            const productList = (yield productModel_1.Product.find({}));
            if (category)
                products = productList.filter((product) => product.category === category);
            else if (brand)
                products = productList.filter((product) => product.brand === brand);
            else if (onSale)
                products = productList.filter((product) => product.onSale);
            else
                products = productList;
        }
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getProducts = getProducts;
