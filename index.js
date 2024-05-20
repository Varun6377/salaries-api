import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import Salaries from "./modelSchema.js";

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());

app.use("/api/salaries", async (_, res) => {
  try {
    const salaries = await Salaries.find();
    res.status(200).json(salaries);
  } catch (error) {
    res.status(404);
    throw new Error("Error retrieving salaries:", error);
  }
});

app.get("/", (_, res) => {
  res.send("Salaries API is running....");
});

app.listen(port, () => console.log(`Server started on port ${port}`));
