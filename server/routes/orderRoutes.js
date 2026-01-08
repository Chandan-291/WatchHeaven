import express from "express";
import Order from "../models/Order.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, async (req, res) => {
  await Order.create({
    userId: req.user.id,
    products: req.body.products,
    totalAmount: req.body.totalAmount,
  });
  res.json({ message: "Order placed" });
});

router.get("/my-orders", protect, async (req, res) => {
  res.json(await Order.find({ userId: req.user.id }));
});

export default router;
