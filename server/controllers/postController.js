import postModel from "../models/postModel.js";

export const createPost = async(req, res) => {
    try{
        const userId = req.user.userId
        if(userId){
            const newPost = new postModel({...req.body, userId})
            await newPost.save()
            return res.status(201).json({message: 'Post added Successfully'})
        }
    }
    catch(error){
        return res.status(500).json({error: 'Server error'})
    }
}