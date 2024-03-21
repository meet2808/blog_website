import Blog from "../models/Blog.model.js";
import Users from "../models/Users.model.js";
import { validationResult } from "express-validator";

export const createBlog = async (req, res) => {
    const errors = validationResult(req);
    try {
        const fields = ["title", "category", "content"];
        const emptyFields = fields.filter(field => !req.body[field]);

        if (emptyFields.length !== 0) return res.status(403).json({ error: "Please fill in all the required fields." });

        if (!errors.isEmpty()) {
            return res.status(403).json(errors)
        } else {
            let user = await Users.findOne({ _id: req.id })

            if (!user) {
                return res.status(409).json("User not found.")
            } else {
                const date = new Date();
                const fullDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
                const blogData = { ...req.body, image: req.file.path, author_id: req.id }

                const savedBlog = await Blog.create(blogData);
                res.status(200).json(savedBlog)
            }
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "Error occured while creating the blog" })
    }
}

export const updateBlog = async (req, res) => {
    const errors = validationResult(req);
    try {
        const fields = ["title", "category", "content"];
        const emptyFields = fields.filter(field => !req.body[field]);

        if (emptyFields.length !== 0) return res.status(403).json({ error: "Please fill in all the required fields." });

        if (!errors.isEmpty()) {
            return res.status(403).json(errors);
        } else {
            let updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedBlog);
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "Error occured while updating the blog" });
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        let blogs = await Blog.find();
        res.status(200).send(blogs)
    } catch (error) {
        // res.status(401).json({ message: error })
        res.status(401).json({ message: error })
    }
}

export const getBlog = async (req, res) => {
    try {
        let blog = await Blog.findById(req.params.id);
        res.status(200).send(blog);
    } catch (error) {
        res.status(401).json({ message: error });
    }
}

export const getBlogByCategory = async (req, res) => {
    try {
        let blogs = [];
        blogs = await Blog.find({ category: req.params.category });
        if (blogs.length !== 0 && blogs.length > 0) {
            res.status(200).send(blogs);
        } else if (blogs.length == 0) {
            res.status(404).send({ message: "No blog found with this category." })
        }
    } catch (error) {
        res.status(401).json({ message: error });
    }
}

export const getBlogByAuthor = async (req, res) => {
    try {
        if (req.params.id === req.id) {
            let blogs = [];
            blogs = await Blog.find({ author_id: req.params.id });
            if (blogs.length !== 0 && blogs.length > 0) {
                res.status(200).send(blogs);
            } else if (blogs.length == 0) {
                res.status(404).send({ message: "No blog found with this author id." })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: error });
    }
}

export const deleteBlog = async (req, res) => {
    try {
        let blog = await Blog.findByIdAndDelete(req.params.id);
        console.log(blog)
        if (blog !== null)
            res.status(200).send({ message: "Blog deleted successfully" })
        else if (blog == null)
            res.status(401).send({ message: "Blog not found or deleted," })
    } catch (error) {
        res.status(401).json({ message: error })
    }
}
