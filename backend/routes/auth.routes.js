import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";
const router = express.Router();


// router.get("/", (req, res) => {
//     console.log('sdf');
//     res.json({ status: "sdfds" });
// })

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)


export default router;