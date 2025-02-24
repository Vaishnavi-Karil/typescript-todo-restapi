import { Request, Response } from "express";
import { User } from "../models/user.model";

export async function createUser(req: Request, res: Response): Promise<void> {
    try {
      console.log('req.body', req.body);
        const {  name, email, mobile, password} = req.body;

        // If user already exists, don't create a new one
        const existingUser = await User.findOne({ email });

        if (existingUser) {
         res.status(400).json({
                message: "User already exists",
            });
            return;
        }

        const newUser = new User({
            name, email, mobile, password,
        });

        await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            data: newUser,
        });
        
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
            console.log("Stack Trace:", error.stack);  // Now we know `error` has a stack property
        } else {
            console.log("An unknown error occurred");
        }
        res.status(500).json({
            message: "Internal Server Error",
        
        });
    }
}

export async function getUser(req: Request, res: Response): Promise<void> {
    try {
        const users = await User.find();

        res.status(200).json({
            message: "Users fetched successfully",
            data: users,
        });
        
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
            console.log("Stack Trace:", error.stack);
        } else {
            console.log("An unknown error occurred");
        }
        res.status(500).json({
            message: "Internal Server Error",
           
        });
    }
}


