import express from 'express'
import { createPost } from '../controllers/postController.js'
import { authToken } from '../auth/auth.js'

const router = express.Router()

router.post('/create_post', authToken, createPost)

export default router