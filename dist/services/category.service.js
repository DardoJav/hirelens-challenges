import { CategoryRepository } from '../repositories/category.repository.js';
const categoryRepository = new CategoryRepository();
export class CategoryService {
    async createCategory(data) {
        return await categoryRepository.create(data);
    }
    async getCategoryById(id) {
        return await categoryRepository.findById(id);
    }
    async getAllCategories() {
        return await categoryRepository.findAll();
    }
    async updateCategory(id, data) {
        return await categoryRepository.update(id, data);
    }
    async deleteCategory(id) {
        return await categoryRepository.delete(id);
    }
}
