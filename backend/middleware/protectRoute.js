import jwt  from "jsonwebtoken";
import userModel from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.staus(401).json({ error: "Unauthorized no token provided" })
        }

        const decoded = jwt.verify(token, process.env.jwt_secret);
        if (!decoded) {
            return res.staus(401).json({ error: "Unauthorized- Invalid token" })
        }
        const user = await userModel.findById(decoded.userId).select("-password")

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        req.user = user
        next();
    } catch (error) {
        console.log(`Error in Protect Routes:${error.message}`);
        res.status(500).json({ error: "Internal server error" })
    }
}

export default protectRoute;    