import express from "express";
import { body } from "express-validator";
import {
    createBlog,
    getAllBlogs,
    getBlog,
    deleteBlog,
    getBlogByCategory,
    getBlogByAuthor,
    updateBlog
} from "../controllers/Blogs.controllers.js";
import { verifyToken } from "../utils/auth.middleware.js";
import { upload } from "../utils/multer.middleware.js";

const router = express.Router();

router.route("/create").post(
    verifyToken,
    upload.single('image'), [
    body("title", "Please enter the title"),
    body("category", "Please select the category"),
    body("content", "Please enter the content"),
    body("image", "Please upload the image")
], createBlog);

router.route("/update/:id").patch(
    verifyToken,
 [
    body("title", "Please enter the title"),
    body("category", "Please select the category"),
    body("content", "Please enter the content"),
    body("image", "Please enter the image url")
], updateBlog);

router.route("/all").get(verifyToken, getAllBlogs)

router.route("/:id").get(verifyToken, getBlog)

router.route("/delete/:id").delete(verifyToken, deleteBlog);

router.route("/category/:category").get(verifyToken, getBlogByCategory);

router.route("/author/:id").get(verifyToken, getBlogByAuthor)

export default router;