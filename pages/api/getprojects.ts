import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

// Define the project schema (same as in projectsubmit.ts)
const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    liveLink: { type: String, required: true },
    techStack: [{ type: String }]
});

// Create the model
const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

// Connect to MongoDB
const connectDB = async () => {
    // Disconnect any existing connections first
    if (mongoose.connections.length > 0) {
        await mongoose.disconnect();
    }

    try {
        await mongoose.connect(process.env.MONGO_URI || "");
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

        if (req.method === "GET") {
            // Fetch all projects from database
            const projects = await Project.find({}).sort({ createdAt: -1 });
            res.status(200).json(projects);
        } else {
            console.log("Method not allowed");
            res.status(405).json({ message: "Method not allowed" });
        }
    } catch (err: any) {
        console.log("Handler error:", err);
        res.status(500).json({ message: "Database connection error" });
    }
}
