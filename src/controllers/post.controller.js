import { Post } from '../models/Post.js'
import { User } from '../models/User.js'


export const getPost = (req, res) => {

}

export const createPost = async (req, res) => {
    const { userId, text } = req.body

    const user = await User.findOne({ where: { id: userId } })

    if (user === null) {
        return res.status(404).json({ error: 'User not exists' })
    }
    
    try {
        const post = await Post.create({
            userId,
            text
        })
        return res.json({
            message: 'Post created',
            payload: post
        })

    } catch (err) {
        return res.status(401).json({ message: "Error creating post" })
    }
}

export const updatePost = (req, res) => {

}

export const deletePost = (req, res) => {

}