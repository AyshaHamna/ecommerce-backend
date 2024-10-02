import express from "express";
import {
  createOrder,
  getOrderById,
  getOrdersByUser,
  handlePayment,
} from "../application/orders.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const ordersRouter = express.Router();

ordersRouter.route("/").post(ClerkExpressRequireAuth({}), createOrder);
ordersRouter.route("/:id").get(ClerkExpressRequireAuth({}), getOrderById);
ordersRouter.route("/webhook/payment").get(handlePayment);
ordersRouter
  .route("/users/:userId")
  .get(ClerkExpressRequireAuth({}), getOrdersByUser);

export default ordersRouter;
