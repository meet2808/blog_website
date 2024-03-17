import express from "express";
import userRoutes from "./Users.routes.js";
import blogRoutes from "./Blog.routes.js";

const router = express.Router();
// route for users
router.use("/users", userRoutes);
// route for blog
router.use("/blog", blogRoutes);

export default router;