import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const Post = sequelize.define('posts', {
    userId: {
        type: DataTypes.BIGINT
    },
    text: {
        type: DataTypes.TEXT,
    },
    likes: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
    }
})