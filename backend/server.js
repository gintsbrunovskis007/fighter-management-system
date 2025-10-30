import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import fighterRouter from "./routes/fighterRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/fighterdb")
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));
app.use("/fighters", fighterRouter);

app.get("/", (req, res) => {
  res.json({ message: "Fighter Management API is running!" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
