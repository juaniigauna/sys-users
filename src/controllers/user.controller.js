import bcrypt from 'bcrypt'
import { Post } from "../models/Post.js"
import { User } from "../models/User.js"

export const login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (user === null) {
        return res.status(404).json({ message: "User not found" })
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Password does not match" })
    }

    return res.json({ message: "You are already logged in.", payload: user })
}

export const getUser = async (req, res) => {
    const { id } = req.params
    const result = await User.findOne({ where: { id }, include: Post })

    if (result === null) {
        return res.status(404).json({ message: "User not found" })
    }
    return res.json({
        message: "User found",
        payload: result
    })
}

export const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    const result = await User.findOne({ where: { email } })

    if (result !== null) {
        return res.status(400).json({ message: "Email already exists" })
    }
    try {
        const user = await User.create({
            firstName,
            lastName,
            email,
            password
        })
        return res.json({
            message: "User created",
            payload: user
        })
    } catch (err) {
        return res.status(400).json({
            message: "Error creating user"
        })
    }
}
export const editUser = async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        const result = await User.update(body, { where: { id } })
        return res.json({ message: "User updated", payload: result })
    } catch (err) {
        return res.status(400).json({
            message: "Error updating user"
        })
    }

}
export const deleteUser = (req, res) => {
    const { id } = req.params

    User.destroy({ where: { id } })

    res.json({ message: "User deleted" })
}