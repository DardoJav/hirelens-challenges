import { handleSuccess, handleError } from '../utils/response.util.js';
import { UserService } from '../services/user.service.js';
const userService = new UserService();
export const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userService.createUser({ username, password });
        handleSuccess(res, user, 'Usuario creado exitosamente', 201);
    }
    catch (error) {
        handleError(res, error, 'Error al crear el usuario', 400);
    }
};
export const getUsers = async (_req, res) => {
    try {
        const users = await userService.getAllUsers();
        handleSuccess(res, users, 'Usuarios recuperados exitosamente');
    }
    catch (error) {
        handleError(res, error, 'Error al recuperar los usuarios', 500);
    }
};
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(Number(id));
        if (!user) {
            return handleError(res, null, 'Usuario no encontrado', 404);
        }
        handleSuccess(res, user, 'Usuario recuperado exitosamente');
    }
    catch (error) {
        handleError(res, error, 'Error al recuperar el usuario', 500);
    }
};
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, password } = req.body;
        const updatedUser = await userService.updateUser(Number(id), { username, password });
        if (!updatedUser) {
            return handleError(res, null, 'Usuario no encontrado', 404);
        }
        handleSuccess(res, updatedUser, 'Usuario actualizado exitosamente');
    }
    catch (error) {
        handleError(res, error, 'Error al actualizar el usuario', 400);
    }
};
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userService.deleteUser(Number(id));
        if (!result) {
            return handleError(res, null, 'Usuario no encontrado', 404);
        }
        handleSuccess(res, null, 'Usuario eliminado exitosamente');
    }
    catch (error) {
        handleError(res, error, 'Error al eliminar el usuario', 500);
    }
};
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await userService.loginUser(username, password);
        if (!token) {
            return handleError(res, null, 'Credenciales incorrectas', 401);
        }
        handleSuccess(res, { token }, 'Inicio de sesión exitoso');
    }
    catch (error) {
        handleError(res, error, 'Error al iniciar sesión', 500);
    }
};
