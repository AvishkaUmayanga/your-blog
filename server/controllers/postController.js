import postModel from "../models/postModel.js";
import userModel from "../models/userModel.js";

//create post
export const createPost = async(req, res) => {
    try{
        const userId = req.user.userId
        if(userId){
            const user = await userModel.findById({_id: userId})
            const userName = user.userName
            const {title, postBody, postImg} = req.body
            if(title  === '' || postImg === '' || postBody.length === 0 ){
                return res.status(400).json({message: 'All fields are required!'})
            }
            const newPost = new postModel({...req.body, userId, userName})
            await newPost.save()
            return res.status(201).json({message: 'Post added Successfully'})
        }
    }
    catch(error){
        return res.status(500).json({error: 'Server error'})
    }
}

//get all post
export const getAllPosts = async(req, res) => {
    try{
        const posts = await postModel.find({}).sort({createdAt: -1})
        if(posts){
            return res.status(200).json({posts})
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).json({error: 'Server error'})
    }
}