 // Erase if already required

import mongoose from "mongoose";

interface PostsType{
    title: string,
    description: string,
    userId: mongoose.Types.ObjectId,
}
// Declare the Schema of the Mongo model
const postSchema  = new mongoose.Schema<PostsType>({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    description : {
        type : String,
        required: true,
        
    }, 
    userId : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required : true
    },
   
});

//Export the model
export const Post = mongoose.model<PostsType>('Post', postSchema);