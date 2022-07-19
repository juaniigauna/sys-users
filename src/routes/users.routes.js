import { Router } from "express"
import { createUser, deleteUser, editUser, getUser, login } from "../controllers/user.controller.js"

const userRoutes = Router()

// Verbos http
// GET -> obtener informacion de un recurso
// POST -> para crear informacion dentro de un recurso
// PUT -> actualizar totalmente algo dentro de un recurso
// PATCH -> para atualizar una parte de un objeto dentro de un recurso
// DELETE -> elimnar algo dentro de un recurso


// Paso 3: Crear los controladores

userRoutes.get("/:id", getUser)
userRoutes.post("/create", createUser)
userRoutes.post("/login", login)
userRoutes.patch("/:id", editUser)
userRoutes.delete("/:id", deleteUser)

export default userRoutes