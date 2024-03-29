import dotenv from 'dotenv'
import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DATABASE_NAME}`)
        console.log("Database Connected");
    } catch (error) {
        console.log("DB Connection Failed : " + error);
    }
}

export default connectDB;
