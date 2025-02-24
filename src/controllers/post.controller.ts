

import { Request, Response } from "express";
import { Post } from "../models/post.model";


export async function createPost(req : Request , res : Response){
    try {
        const {title, description , userId} = req.body;
       const newPost = new Post({title , description, userId});

       await newPost.save();
       res.status(201).json({
              message: 'Post created successfully',
              data: newPost
       })
    } catch (error) {
        console.log("error", error); 
        res.status(500).send("Internal Server Error");
        
    }
}

export async function getPosts(req: Request, res: Response) {
    try {
        // Corrected: Use Posts.find() directly without parentheses
        const posts = await Post.find();  // Fetch all posts from the database

        console.log('Posts', posts);

        res.status(200).json({
            message: 'Posts fetched successfully',
            data: posts
        });
        
    } catch (error) {
        console.log("error", error); 
        res.status(500).send("Internal Server Error");
    }
}


export async function getPostByUserId(req: Request, res : Response){
try {
    const getPostById = await Post.find({userId: req.params.userId}).select( "_id title description userId");
    
    res.status(200).json({
        message : 'Post fetched successfully',
        data : getPostById
    })
} catch (error) {
    console.log('error', error);
    res.status(500).json({
        message : 'Internal Server Error'
    })
}
}

export async function getPostByPostId(req: Request, res: Response){
    try {
        const getPostById = await Post.findById(req.params.postId); 

        res.status(200).json({
            message : 'Post fetched successfully',
            data : getPostById
        })
    } catch (error) {
        res.status(500).json({
            message : "Internal Server Errror"
        })
    }
}

