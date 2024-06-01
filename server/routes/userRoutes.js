import express from 'express'
import { signIn, signup, googleSignIn } from '../controllers/userController.js'

const router = express.Router()

router.post('/signup', signup)
       .post('/signIn', signIn)
       .post('/google', googleSignIn)

export default router