import express from "express";
import productsRouter from "./api/products.js";
import categoriesRouter from "./api/categories.js";
import { connectDB } from "./infrastructure/db.js";
import ordersRouter from "./api/orders.js";
import { globalErrorHandler } from "./api/middleware/global-error-handler.js";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());

app.use(cors());

connectDB();
app.get("/", (req, res) => res.send("Express on Vercel"));

app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/orders", ordersRouter);

app.use(globalErrorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
