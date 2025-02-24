import { Request, Response } from "express";

export async function getTodos(req : Request, res: Response){
    try {
        
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}