import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "No token Provided." })

    // Extract token from "Bearer <token>" format
    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Invalid token format' });
    }

    const tokenValue = tokenParts[1];
    console.log("token", tokenValue);

    const decoded = jwt.verify(tokenValue, process.env.JWT);
    if (decoded)
        // res.send(200).json({ message: "blog created successfully" })
        next()
        // return true
    else
        res.send(401).json({ message: "Invalid Token" })

    // jwt.verify(tokenValue, process.env.JWT, (err, decoded) => {
    //     if (err) {
    //         if (err.name === 'TokenExpiredError') {
    //             return res.status(401).json({ message: 'Token expired' });
    //         } else {
    //             return res.status(401).json({ message: 'Invalid token' });
    //         }
    //     }

    //     //req.user = user; // You can use req.user in subsequent middleware or routes
    //     // next();
    //     // if(err) return res.send(403).json({ message : "Token is not valid!"});
    //     // req.user = user;
    //     // next();
    // });
}

export const verifyUser = (req, res, next) => {
    // console.log(req)
    verifyToken(req, res, () => {
        if (true) {
            next();
        } else {
            return res.send(403).json({ message: "You are not authorized" });
        }
    })
}