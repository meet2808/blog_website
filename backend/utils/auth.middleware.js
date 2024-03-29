import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken || req.headers.authorization;
    if (!token) return res.status(401).json({ message: "No Authorized Request." })

    const tokenValue = req.headers.authorization?.replace("Bearer ", "")
    const verifiedToken = jwt.verify(tokenValue, process.env.JWT);
    if (verifiedToken) {
        req.id = verifiedToken.id;
        next();
    }
    else {
        return res.send(401).json({ message: "No Authorized Request" });
    }
}