import mongoose from "mongoose";

const connectToMongodb = async ()=>{
    try {
        // await mongoose.connect(process.env.mongodb)
        await mongoose.connect("mongodb://127.0.0.1:27017/chat_app")
        // console.log("connected to the mongodb")
    } catch (error) {
        console.log(`Error while connecting to the DB : `,error.message)
    }
}

export default connectToMongodb;