import mongoose from "mongoose";// Erase if already required

// Declare the Schema of the Mongo model
const todoSchema = new mongoose.Schema({
 userId : mongoose.Schema.Types.ObjectId, 
 task: {
    type: String,
    required : true,
 }, 
 enum : ['pending', 'completed', 'in-progress', 'on-hold', 'already done', 'done', 'not started', 'started']

});

//Export the models
const Todo = mongoose.model('Todo', todoSchema);