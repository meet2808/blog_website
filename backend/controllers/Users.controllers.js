import Users from "../models/Users.model.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUser = async (req, res, next) => {
    const errors = validationResult(req);

    try {
        const fields = ["email", "password"];
        const emptyFields = fields.filter(field => !req.body[field]);

        if (emptyFields.length > 0) return res.status(403).json({ error: "Please fill in all the required fields." });

        if (!errors.isEmpty()) {
            return res.status(403).json(errors)
        } else {
            let isExist = await Users.find({ email: req.body.email });

            if (isExist.length !== 0) {
                return res.status(409).json("User is already registered.")
            } else {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(req.body.password, salt);
                const userData = { ...req.body, password: hashedPassword }

                const savedUser = await Users.create(userData)
                res.status(200).json(savedUser)
            }
        }
    } catch (error) {
        next(error);
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const user = await Users.findOne({ email: req.body.email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid email id or password" });

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT);
        const options = {
            domain: 'http://localhost:3000',
            httpOnly: false,
            signed: true,
            secure: true,
            sameSite: 'none',
        }
        res.cookie("accessToken", token, options).status(200).json({ details: { email: user.email, id: user._id, access_token: token } })
    } catch (err) {
        next(err);
    }
}