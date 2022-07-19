import 'dotenv/config'

import express from 'express'
import { sequelize } from './database/index.js'

import './models/User.js'

import userRoutes from './routes/users.routes.js'
import postRoutes from './routes/posts.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRoutes)
app.use('/post', postRoutes)

sequelize.sync({ logging: false })

app.listen(5000, () => console.log('Working...'))