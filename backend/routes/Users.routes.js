import express from "express";
import { body } from "express-validator";
import { createUser, loginUser } from "../controllers/Users.controllers.js";

const router = express.Router();

router.route("/create").post([
    body("email", "Please enter valid email address").isEmail(),
    body("password").isLength({ min: 6, max: 20 }).withMessage("Password length must be between  6 and 20 character long")
], createUser);

router.route("/login").post(loginUser);

export default router;