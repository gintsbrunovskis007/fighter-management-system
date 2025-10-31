import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import fighterRouter from "./routes/fighterRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js"; // Add this
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose
  .connect("mongodb://127.0.0.1:27017/fighterdb")
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/fighters", fighterRouter);
app.use("/upload", uploadRouter); // Add this

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Fighter Management API is running!" });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
