import { time } from "console";
import mongoose from "mongoose"; // Erase if already required


interface UserType{
    name: string,
    email: string,
    mobile: string,
    password: string,
}
// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema<UserType>({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
},{
    timestamps: true
});

export const User = mongoose.model<UserType>('User', userSchema);