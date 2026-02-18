import { log } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { li } from "framer-motion/client";
import { link } from "fs";

// Define the project schema
const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    liveLink: { type: String, required: true },
    techStack: [{ type: String }],
    linkType: { type: String, default: "website" } // Default to "website"
});

// Create the model
// Create the Project model if it doesn't exist
const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

// Connect to MongoDB
const connectDB = async () => {
    // Disconnect any existing connections first
    if (mongoose.connections.length > 0) {
        await mongoose.disconnect();
    }
    
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("MONGO_URI environment variable is not defined");
        }
        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB Portfolio database");
    } catch (err: any) {
        console.log("MongoDB connection error:", err);
        throw err;
    }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Ensure database connection
        await connectDB();
        
        if(req.method === "POST") {
            const { name, description, liveLink, techStack } = req.body;
            let techStackArray = techStack.split(",");
            
            const project = new Project({
                name,
                description, 
                liveLink,
                techStack: techStackArray,
                linkType: req.body.linkType || "website"
            });

            // Save the project to database
            try {
                await project.save();
                res.status(200).json({ message: "Project added successfully" });
            } catch (err: any) {
                console.log(err);
                res.status(500).json({ message: "Error saving project" });
            }
        }else{
            console.log("Method not allowed");
            res.status(405).json({ message: "Method not allowed" });
        }
    } catch (err: any) {
        console.log("Handler error:", err);
        res.status(500).json({ message: "Database connection error" });
    }
}