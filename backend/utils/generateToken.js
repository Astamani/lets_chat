import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.jwt_secret, {
        expiresIn: '15d'
    })
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,//Prevent XSS attacks Cross-site scripting attacks
        samesite: "strict", //CSRF attacks cross-site request forgery  attacks
        secure: process.env.NODE_ENV !== 'Developement'
    })
}

export default generateTokenAndSetCookie;