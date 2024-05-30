import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    profilePicture: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

const userModel = mongoose.model('user', userSchema)
export default userModel