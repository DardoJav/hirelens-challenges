import express from 'express';
import dotenv from 'dotenv';
import { sequelize, connectToDatabase } from './config/database.js';
import noteRoutes from './routes/note.routes.js';
import userRoutes from './routes/user.routes.js';
import categoryRoutes from './routes/category.routes.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { setupAssociations } from './models/associations.js';
import cors from 'cors';
// Emula el comportamiento de __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();
const app = express();
console.log('Ruta actual:', __dirname);
app.use(cors({
    origin: 'http://localhost:3000', // Reemplaza con la URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use('/api/notes', noteRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});
const PORT = process.env.PORT || 3000;
(async () => {
    try {
        console.log('Conectando a la base de datos...');
        await connectToDatabase();
        console.log('Configurando asociaciones...');
        setupAssociations();
        console.log('Sincronizando modelos con la base de datos...');
        await sequelize.sync({ alter: true }); // Usa 'force: true' solo en desarrollo si quieres reiniciar las tablas
        console.log('Modelos sincronizados correctamente.');
        app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
    }
    catch (error) {
        console.error('Error al inicializar la aplicación:', error);
        process.exit(1);
    }
})();
