import express from 'express'
import { signIn, signup, googleSignIn, userDetails, updateUer, signOut } from '../controllers/userController.js'
import { authToken } from '../auth/auth.js'

const router = express.Router()

router.post('/signup', signup)
       .post('/signIn', signIn)
       .post('/google', googleSignIn)
       .get('/user_data', authToken, userDetails)
       .patch('/update_user', authToken, updateUer)
       .post('/signout', signOut)

export default router