import express from "express";
import { body } from "express-validator";
import { createBlog } from "../controllers/Blogs.controllers.js";
import multer from "multer";
import { verifyUser } from "../utils/authMiddleware.js";

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/') // Specify the directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // Specify the filename for uploaded files
    }
});

// Multer instance with configuration
const upload = multer({ storage: storage });

router.route("/create").post(verifyUser, [
    body("title", "Please enter the title"),
    body("category", "Please select the category"),
    body("content", "Please enter the content"),
    body("image", "Please upload the image")
], /*upload.single('image'),*/ createBlog);

export default router;