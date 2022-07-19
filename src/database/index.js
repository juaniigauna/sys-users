import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    process.env.DB_NAME, // Nombre base de datos
    process.env.DB_USER, // Nombre de usuario de la base de datos
    process.env.DB_PASSWORD, // Contraseña de la base de datos
    {
        host: process.env.DB_HOST, // Servidor donde se aloja la base de datos
        dialect: process.env.DB_DIALECT, // Tipo de base de datos a usar
    }
)

export { sequelize }