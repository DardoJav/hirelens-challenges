import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,
    }
);

export const connectToDatabase = async () => {
    try {
        console.log('haciendo conexion');
        await sequelize.authenticate();
        console.log('Conexión establecida con la base de datos.');
    } catch (error) {
        console.error('Error conectando a la base de datos:', error);
        process.exit(1);
    }
};