import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize('mysql://root:dYbHyCgSayaZOwobzNNfTBBkcVRskora@autorack.proxy.rlwy.net:14448/railway' as string,
    {
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