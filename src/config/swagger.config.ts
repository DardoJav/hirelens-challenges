import { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Notas, Usuarios y Categorías',
            version: '1.0.0',
            description: 'Documentación de la API para gestionar usuarios, notas y categorías.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local',
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // Cambia esta ruta según la estructura de tu proyecto
};

export default swaggerOptions;
