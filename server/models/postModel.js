import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    userName: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    postImg: {
        type: String,
        default: 'https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg'
    },
    postBody: []
},{ timestamps: true })

const postModel = mongoose.model('post', postSchema)
export default postModel
