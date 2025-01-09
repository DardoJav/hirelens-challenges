import { User } from '../models/user.model.js';

export class UserRepository {
    async create(data: Partial<User>): Promise<User> {
        return await User.create(data);
    }

    async findAll(): Promise<User[]> {
        return await User.findAll();
    }

    async findById(id: number): Promise<User | null> {
        return await User.findByPk(id);
    }

    async update(id: number, data: Partial<User>): Promise<User | null> {
        const user = await this.findById(id);
        if (!user) return null;
        return await user.update(data);
    }

    async delete(id: number): Promise<boolean> {
        const user = await this.findById(id);
        if (!user) return false;
        await user.destroy();
        return true;
    }

}
