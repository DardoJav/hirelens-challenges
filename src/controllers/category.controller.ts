import { Request, Response } from 'express';
import { CategoryService } from '../services/category.service.js';
import { handleError, handleSuccess } from '../utils/response.util.js';

const categoryService = new CategoryService();

export class CategoryController {
    async create(req: Request, res: Response) {
        try {
            const category = await categoryService.createCategory(req.body);
            return handleSuccess(res, category, 'Categoría creada exitosamente.');
        } catch (error) {
            return handleError(res, error, 'Error al crear la categoría.');
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const category = await categoryService.getCategoryById(Number(id));
            if (!category) {
                return handleError(res, null, 'Categoría no encontrada.', 404);
            }
            return handleSuccess(res, category, 'Categoría obtenida exitosamente.');
        } catch (error) {
            return handleError(res, error, 'Error al obtener la categoría.');
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const categories = await categoryService.getAllCategories();
            return handleSuccess(res, categories, 'Categorías obtenidas exitosamente.');
        } catch (error) {
            return handleError(res, error, 'Error al obtener las categorías.');
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedCategory = await categoryService.updateCategory(Number(id), req.body);
            if (!updatedCategory) {
                return handleError(res, null, 'Categoría no encontrada.', 404);
            }
            return handleSuccess(res, updatedCategory, 'Categoría actualizada exitosamente.');
        } catch (error) {
            return handleError(res, error, 'Error al actualizar la categoría.');
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deleted = await categoryService.deleteCategory(Number(id));
            if (!deleted) {
                return handleError(res, null, 'Categoría no encontrada.', 404);
            }
            return handleSuccess(res, null, 'Categoría eliminada exitosamente.');
        } catch (error) {
            return handleError(res, error, 'Error al eliminar la categoría.');
        }
    }
}
