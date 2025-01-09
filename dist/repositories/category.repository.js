import { Category } from '../models/category.model.js';
export class CategoryRepository {
    async create(data) {
        const { name } = data;
        if (!name) {
            throw new Error('El nombre de la categoría es obligatorio.');
        }
        return await Category.create({ name });
    }
    async findById(id) {
        return await Category.findOne({ where: { id } });
    }
    async findAll() {
        return await Category.findAll();
    }
    async update(id, data) {
        const category = await this.findById(id);
        if (!category)
            return null;
        return await category.update(data);
    }
    async delete(id) {
        const category = await this.findById(id);
        if (!category)
            return false;
        await category.destroy();
        return true;
    }
}
