import { User } from '../models/user.model.js';
export class UserRepository {
    async create(data) {
        return await User.create(data);
    }
    async findAll() {
        return await User.findAll();
    }
    async findById(id) {
        return await User.findByPk(id);
    }
    async update(id, data) {
        const user = await this.findById(id);
        if (!user)
            return null;
        return await user.update(data);
    }
    async delete(id) {
        const user = await this.findById(id);
        if (!user)
            return false;
        await user.destroy();
        return true;
    }
}
