import express from "express";
import { body } from "express-validator";
import { createBlog, getAllBlogs, getBlog, deleteBlog } from "../controllers/Blogs.controllers.js";
import { verifyToken } from "../utils/auth.middleware.js";
import { upload } from "../utils/multer.middleware.js";

const router = express.Router();

router.route("/create").post(verifyToken, [
    body("title", "Please enter the title"),
    body("category", "Please select the category"),
    body("content", "Please enter the content"),
    body("image", "Please upload the image")
], upload.single('image'), createBlog);

router.route("/all").get(verifyToken, getAllBlogs)

router.route("/:id").get(verifyToken, getBlog)

router.route("/delete/:id").delete(verifyToken, deleteBlog)

export default router;