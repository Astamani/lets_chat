import userModel from "../models/user.model.js";
export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await userModel.find({ _id: { $ne: loggedInUserId } }).select('-password')

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log(`Error in getUsersForSidebar:${error}`)
        res.status(500).json({ error: "Internal server error" })
    }
}