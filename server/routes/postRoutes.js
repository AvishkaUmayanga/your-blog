import express from 'express'
import { createPost, getAllPosts } from '../controllers/postController.js'
import { authToken } from '../auth/auth.js'

const router = express.Router()

router.post('/create_post', authToken, createPost)
      .get('/all_posts', getAllPosts)

export default router