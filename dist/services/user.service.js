import { UserRepository } from '../repositories/user.repository.js';
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
}
