import { Router } from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser, } from '../controllers/user.controller.js';
const router = Router();
// Rutas para los usuarios
router.post('/', createUser); // Crear usuario
router.get('/', getUsers); // Obtener todos los usuarios
router.get('/:id', getUserById); // Obtener un usuario por ID
router.put('/:id', updateUser); // Actualizar un usuario por ID
router.delete('/:id', deleteUser); // Eliminar un usuario por ID
export default router;
