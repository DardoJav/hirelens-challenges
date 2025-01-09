import { Category } from '../models/category.model.js';

export class CategoryRepository {
    async create(data: { name: string }): Promise<Category> {
        const { name } = data;

        if (!name) {
            throw new Error('El nombre de la categoría es obligatorio.');
        }

        return await Category.create({ name });
    }

    async findById(id: number): Promise<Category | null> {
        return await Category.findOne({ where: { id } });
    }

    async findAll(): Promise<Category[]> {
        return await Category.findAll();
    }

    async update(id: number, data: Partial<Category>): Promise<Category | null> {
        const category = await this.findById(id);
        if (!category) return null;
        return await category.update(data);
    }

    async delete(id: number): Promise<boolean> {
        const category = await this.findById(id);
        if (!category) return false;
        await category.destroy();
        return true;
    }
}
