import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//mongodb connect
export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("MongoDB connected");
    }catch(err) {
        console.error('MongoDB connection error : ', err);
        process.exit(1);
    }
}