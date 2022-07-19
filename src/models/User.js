import { DataTypes } from 'sequelize'
import bcrypt from 'bcrypt'

import { sequelize } from '../database/index.js'

import { Post } from './Post.js'

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        set(firstName) {
            this.setDataValue('firstName', firstName.toLowerCase());
        },
        get() {
            const firstName = this.getDataValue('firstName')
            return firstName.toUpperCase()
        }
    },
    lastName: {
        type: DataTypes.STRING,
        set(lastName) {
            this.setDataValue('lastName', lastName.toLowerCase());
        },
        get() {
            const lastName = this.getDataValue('lastName')
            return lastName.toUpperCase()
        }
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
        set(password) { // Mutador
            const hash = bcrypt.hashSync(password, 10)
            this.setDataValue('password', hash)
        }
    },
})

User.hasMany(Post, {
    foreignKey: 'userId',
    sourceKey: 'id'
})

Post.belongsTo(User, {
    foreignKey: 'userId',
    targetKey: 'id'
})