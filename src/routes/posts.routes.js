import { Router } from 'express'
import { createPost } from '../controllers/post.controller.js'

const postRoutes = Router()

postRoutes.get("/:id")
postRoutes.post("/", createPost)
postRoutes.patch("/:id")
postRoutes.delete("/:id")


export default postRoutes