import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//signup
export const signup = async(req, res) => {
    try{
        const {email, password, userName} = req.body
        const existingUser = await userModel.findOne({email})
        const existingUserName = await userModel.findOne({userName})
        if(existingUser){
            return res.status(400).json({message: 'Email already exists'})
        }
        if(existingUserName){
            return res.status(400).json({message: 'Username already exists'})
        }
        else{
            const hashedPassword = await bcrypt.hash(password,10)
            const newUser = new userModel({email, password:hashedPassword, userName})
            await newUser.save()
            return res.status(201).json({message: 'Signup successfull'})
        }
    }
    catch(error){
        return res.status(500).json({error: 'Server error'})
    }
}

//signIn
export const signIn = async(req, res) => {
    try{
        const {email, password} = req.body
        const existingUser = await userModel.findOne({email})
        if(!existingUser){
            return res.status(400).json({message: 'Email not found'})
        }
        else{
            const passwordMatch = await bcrypt.compare(password, existingUser.password)
            if(!passwordMatch){
                return res.status(401).json({message:'Invalid password'})
            }
            else{
                const user = {userId: existingUser._id, isAdmin: existingUser.isAdmin }
                const token = jwt.sign(user, process.env.TOKEN_KEY)
                res.cookie('token', token, { httpOnly: true, path: '/'}).status(200).json({ message: 'Login successfull' })
            }
        }
    }
    catch(error){
        return res.status(500).json({error: 'Server error'})
    }
}

//google signin
export const googleSignIn = async(req, res) => {
    try{
        const {email, userName, googleProfileImg} = req.body
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            const user = {userId: existingUser._id, isAdmin: existingUser.isAdmin}
            const token = jwt.sign(user, process.env.TOKEN_KEY)
            return res.cookie('token', token, {httpOnly: true}).status(200).json({ message: 'Login successfull' })
        }
        else{
            const generatedPassword =  process.env.TOKEN_KEY
            const hashedPassword = await bcrypt.hash(generatedPassword,10)
            const firstName = userName.split(' ')[0]
            const newUser = new userModel({
                userName: firstName.toLowerCase() + Math.floor(Math.random()*100),
                email,
                password: hashedPassword,
                profilePicture: googleProfileImg
            })
            await newUser.save()
            const user = {userId: newUser._id, isAdmin: newUser.isAdmin}
            const token = jwt.sign(user, process.env.TOKEN_KEY)
            return res.cookie('token', token, {httpOnly: true}).status(200).json({ message: 'Login successfull' })
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).json({error: 'Server error'})
    }
}

//signout
export const signOut = async(req, res) => {
    res.clearCookie('token')
    return res.status(200).json({ message: 'Logout successfull' })
}

//get user details
export const userDetails = async(req, res) => {
    try{
        const userId = req.user.userId
        if(userId){
            const user = await userModel.findById({_id: userId})
            const userData = {userName: user.userName, email: user.email, profilePicture: user.profilePicture, isAdmin: user.isAdmin}
            console.log(userData)
            return res.status(200).json({userData})
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).json({error: 'Server error'})
    }
}

//update user
export const updateUer = async(req, res) => {
    try{
        const userId = req.user.userId
        const {email, password, userName, profilePicture} = req.body
        if(userId){
            const user = await userModel.findById({_id: userId})
            if(user){
                const passwordMatch = await bcrypt.compare(password, user.password)
                const updateData = {}
                if(!passwordMatch){
                    return res.status(401).json({message:'Invalid password'})
                }
                else{
                    if(userName){
                        updateData.userName = userName
                    }
                    if(email){
                        updateData.email = email
                    }
                    if(profilePicture){
                        updateData.profilePicture = profilePicture
                    }
                    await userModel.findByIdAndUpdate( userId, updateData)
                    return res.status(200).json({ message: 'updated successfully' })
                }
            } 
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).json({error: 'Server error'})
    }
}