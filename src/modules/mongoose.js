import mongoose from "mongoose";
import "../models/SessionModel.js";

async function database() {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL);
        return db;
    } catch (error) {
        console.log("DATABASE ERROR", error + "");
    }
}

export default database;
