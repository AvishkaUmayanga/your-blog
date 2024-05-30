import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signup = async(req, res) => {
    try{
        const {email, password, ...rest} = req.body
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(400).json({message: 'Email already exists'})
        }
        else{
            const hashedPassword = await bcrypt.hash(password,10)
            const newUser = new userModel({email, password:hashedPassword, ...rest})
            await newUser.save()
            return res.status(201).json({message: 'Signup successfull'})
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).json({error: 'Server error'})
    }
}

//
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
                return res.cookie('token', token, {httpOnly: true})
            }
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).json({error: 'Server error'})
    }
}