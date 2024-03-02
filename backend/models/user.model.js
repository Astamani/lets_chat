import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    gender: {
        type: String,
        require: true,
        enum: ["male", "female"]
    },
    profilePic: {
        type: String,
        default: ""
    }

}, { timestamps: true })

const userModel = mongoose.model('userModel', userSchema);
export default userModel;
