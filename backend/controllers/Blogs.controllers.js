import Blog from "../models/Blog.model.js";
import Users from "../models/Users.model.js";
import { validationResult } from "express-validator";

export const createBlog = async (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body)

    // try {
    //     const fields = ["title", "category", "content", "image"];
    //     const emptyFields = fields.filter(field => !req.body[field]);

    //     if (emptyFields.length !== 0) return res.status(403).json({ error: "Please fill in all the required fields." });

    //     if (!errors.isEmpty()) {
    //         return res.status(403).json(errors)
    //     } else {
    //         let user = await Users.find({ email: req.body.email })
    //         let userId = user._id

    //         if(user.length !== 0){
    //             return res.status(409).json("User not found.")
    //         } else {
    //             console.log(user)
    //         }
    //     }
    // } catch (error) {
    //     next(error);
    // }
}