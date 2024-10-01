import express from "express";
import productsRouter from "./api/products.js";
import categoriesRouter from "./api/categories.js";
import { connectDB } from "./infrastructure/db.js";
import ordersRouter from "./api/orders.js";
import { globalErrorHandler } from "./api/middleware/global-error-handler.js";
import cors from "cors";
import 'dotenv/config';

const app = express();
app.use(express.json());

app.use(cors())

app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/orders", ordersRouter);

app.use(globalErrorHandler);

const PORT = 8000;

connectDB();

app.listen(8000, () => {
  console.log(`server is running on port ${PORT}`);
});
