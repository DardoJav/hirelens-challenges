import { UserRepository } from '../repositories/user.repository.js';
import { User } from '../models/user.model.js';

const userRepository = new UserRepository();

export class UserService {
    async createUser(data: Partial<User>): Promise<User> {
        return await userRepository.create(data);
    }

    async getAllUsers(): Promise<User[]> {
        return await userRepository.findAll();
    }

    async getUserById(id: number): Promise<User | null> {
        return await userRepository.findById(id);
    }

    async updateUser(id: number, data: Partial<User>): Promise<User | null> {
        return await userRepository.update(id, data);
    }

    async deleteUser(id: number): Promise<boolean> {
        return await userRepository.delete(id);
    }
}
