import express from "express";
import cors from "cors";
import { json } from "express";
import productRoutes from "./routes/productRoute";
import { db } from "./db/db";
const app = express();
app.use(cors());
app.use(json());
app.use("/products", productRoutes);
db(app);
