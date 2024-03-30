import mongoose from "mongoose";
import { Express } from "express";
export const db = async (app: Express) => {
  try {
    await mongoose.connect(
      "mongodb+srv://borisdanev9:devdatabase@cluster0.ezobnhr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
    );
    app.listen(4000, () => {
      console.log("running on port 4000");
    });
  } catch (err: any) {}
};
