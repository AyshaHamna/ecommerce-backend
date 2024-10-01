import express from "express";
import { createProduct, getProductById, getProducts } from "../application/products.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import AuthorizationMiddleware from './middleware/authorization-middleware.js';

const productsRouter = express.Router();

productsRouter.route('/').get(getProducts).post(ClerkExpressRequireAuth({}), AuthorizationMiddleware , createProduct);
productsRouter.route('/:id').get(getProductById);

export default productsRouter;