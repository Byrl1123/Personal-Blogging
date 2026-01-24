import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

export const connectToDatabase = async () => {
    const url = process.env.DB_CONN_STRING;
    
    if (!url) {
        throw new Error("DB_CONN_STRING is not defined in environment variables");
    }

    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB successfully");
        
        // Optional: Log the database name
        console.log(`Database: ${mongoose.connection.db?.databaseName}`);
        
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
};

// Optional: Handle connection events
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});