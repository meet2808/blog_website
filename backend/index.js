import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./dbConfig.js";
import router from "./routes/app.routes.js";

const app = express();

app.use(express.json());
dotenv.config();
connectDB();
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000" , allowedHeaders:{
    "Access-Control-Allow-Credentials": true
}}));

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use("/api", router);

app.listen(5000, () => console.log(`App is running at PORT 5000`))