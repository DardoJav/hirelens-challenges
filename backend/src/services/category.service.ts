import { CategoryRepository } from '../repositories/category.repository.js';
import { Category } from '../models/category.model.js';

const categoryRepository = new CategoryRepository();

export class CategoryService {
    async createCategory(data: { name: string }): Promise<Category> {
        return await categoryRepository.create(data);
    }

    async getCategoryById(id: number): Promise<Category | null> {
        return await categoryRepository.findById(id);
    }

    async getAllCategories(): Promise<Category[]> {
        return await categoryRepository.findAll();
    }

    async updateCategory(id: number, data: Partial<Category>): Promise<Category | null> {
        return await categoryRepository.update(id, data);
    }

    async deleteCategory(id: number): Promise<boolean> {
        return await categoryRepository.delete(id);
    }
}
