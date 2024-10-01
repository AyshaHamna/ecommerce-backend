import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
} from "../application/categories.js";
import AuthorizationMiddleware from "./middleware/authorization-middleware.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const categoriesRouter = express.Router();

categoriesRouter
  .route("/")
  .get(getCategories)
  .post(ClerkExpressRequireAuth({}), AuthorizationMiddleware, createCategory);
categoriesRouter.route("/:id").get(getCategoryById);

export default categoriesRouter;
