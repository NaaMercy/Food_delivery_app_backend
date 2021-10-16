import mongoose from 'mongoose'
import dotenv from 'dotenv'

//configure dotenv first before using it
dotenv.config();

//you can use an if else statement in place of the tenary operator
const DB_URL = process.env.NODE_ENV === 'dev' ? process.env.LOCAL_HOST_DB_URL : process.env.DB_URL;

//creating connection to the mongoDB database and exporting it
export async function connectMongoDB(){
    try {
        await mongoose.connect(DB_URL,{});
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log("Couldn't connect to mongoDB", error);
    }
}