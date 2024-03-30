"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_2 = require("express");
const productRoute_1 = __importDefault(require("./routes/productRoute"));
const db_1 = require("./db/db");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_2.json)());
app.use("/products", productRoute_1.default);
(0, db_1.db)(app);
