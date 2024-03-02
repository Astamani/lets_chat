import { json } from 'express';
import userModel from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js'

export const signup = async (req, res, next) => {
    try {
        const { fullName, userName, gender, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.status(404).json({ error: "Password don't match" })
        }
        const user = await userModel.findOne({ userName })
        if (user) {
            return res.status(400).json({ error: "User already exists" })
        }
        //Hash password is here
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`
        const newUser = new userModel({
            fullName: fullName,
            userName: userName,
            gender: gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
            password: hashedPassword
        })
        if (newUser) {
            await newUser.save();

            generateTokenAndSetCookie(newUser._id, res)

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic
            })
        }
        else {
            res.status(400).json({ success: false, error: "Invalid user" })
        }
    }
    catch (error) {
        console.log(`The Error is :${error.message}`)
        return res.status(500).json({ success: false, error: "Internal server error" })
    }
}
export const login = async (req, res, next) => {
    try {
        let { userName, password } = req.body;
        const user = await userModel.findOne({ userName });
        if (!user || !(await bcryptjs.compare(password, user?.password || ""))) {
            return res.status(400).json({ error: "Invalid username or password" })
        }

        generateTokenAndSetCookie(user._id, res);//token generator(cookie)
        return res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic
        })
    } catch (error) {
        console.log(`The error in login controller :${error.message}`)
        return res.status(500).json({ success: false, error: "Internal server error" })
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        console.log(`The error in login controller :${error.message}`)
        return res.status(500).json({ success: false, error: "Internal server error" })
    }
}