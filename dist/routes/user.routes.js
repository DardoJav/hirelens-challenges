import { Router } from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser, login, } from '../controllers/user.controller.js';
import { authenticateJWT } from '../middlewares/auth.middleware.js';
const router = Router();
// Ruta pública para login
router.post('/login', login);
// Rutas para los usuarios
router.post('/', createUser); // Crear usuario
router.get('/', authenticateJWT, getUsers); // Obtener todos los usuarios
router.get('/:id', getUserById); // Obtener un usuario por ID
router.put('/:id', updateUser); // Actualizar un usuario por ID
router.delete('/:id', deleteUser); // Eliminar un usuario por ID
export default router;
