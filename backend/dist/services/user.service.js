import { UserRepository } from '../repositories/user.repository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const userRepository = new UserRepository();
export class UserService {
    async createUser(data) {
        return await userRepository.create(data);
    }
    async getAllUsers() {
        return await userRepository.findAll();
    }
    async getUserById(id) {
        return await userRepository.findById(id);
    }
    async updateUser(id, data) {
        return await userRepository.update(id, data);
    }
    async deleteUser(id) {
        return await userRepository.delete(id);
    }
    async loginUser(username, password) {
        const user = await userRepository.findByUsername(username); // Crear esta función en el repositorio
        if (!user)
            return null;
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid)
            return null;
        // Generar el token JWT
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        return token;
    }
}
