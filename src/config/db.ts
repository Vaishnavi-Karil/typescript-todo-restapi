import mongoose from "mongoose";

const DB_URI = "mongodb://localhost:27017/yourDatabaseName"; // Update with your actual DB name

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);  // No callbacks needed
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit if connection fails
    }
};


