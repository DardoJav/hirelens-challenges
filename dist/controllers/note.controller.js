import { NoteService } from '../services/note.service.js';
import { handleError, handleSuccess } from '../utils/response.util.js';
const noteService = new NoteService();
export class NoteController {
    async create(req, res) {
        try {
            const note = await noteService.createNote(req.body);
            return handleSuccess(res, note, 'Nota creada exitosamente.');
        }
        catch (error) {
            return handleError(res, error, 'Error al crear la nota.');
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const updatedNote = await noteService.updateNote(Number(id), req.body);
            if (!updatedNote) {
                return handleError(res, null, 'Nota no encontrada.', 404);
            }
            return handleSuccess(res, updatedNote, 'Nota actualizada exitosamente.');
        }
        catch (error) {
            return handleError(res, error, 'Error al actualizar la nota.');
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await noteService.deleteNote(Number(id));
            if (!deleted) {
                return handleError(res, null, 'Nota no encontrada.', 404);
            }
            return handleSuccess(res, null, 'Nota eliminada exitosamente.');
        }
        catch (error) {
            return handleError(res, error, 'Error al eliminar la nota.');
        }
    }
    async getActiveNotes(req, res) {
        try {
            const { userId } = req.params;
            const activeNotes = await noteService.getActiveNotes(Number(userId));
            return handleSuccess(res, activeNotes, 'Notas activas obtenidas exitosamente.');
        }
        catch (error) {
            return handleError(res, error, 'Error al obtener las notas activas.');
        }
    }
    async getArchivedNotes(req, res) {
        try {
            const { userId } = req.params;
            const archivedNotes = await noteService.getArchivedNotes(Number(userId));
            return handleSuccess(res, archivedNotes, 'Notas archivadas obtenidas exitosamente.');
        }
        catch (error) {
            return handleError(res, error, 'Error al obtener las notas archivadas.');
        }
    }
    async addCategoryToNote(req, res) {
        try {
            const { id, categoryId } = req.params;
            await noteService.addCategoryToNote(Number(id), Number(categoryId));
            return handleSuccess(res, null, 'Categoría agregada a la nota exitosamente.');
        }
        catch (error) {
            return handleError(res, error, 'Error al agregar categoría a la nota.');
        }
    }
    async removeCategoryFromNote(req, res) {
        try {
            const { id, categoryId } = req.params;
            await noteService.removeCategoryFromNote(Number(id), Number(categoryId));
            return handleSuccess(res, null, 'Categoría eliminada de la nota exitosamente.');
        }
        catch (error) {
            return handleError(res, error, 'Error al eliminar categoría de la nota.');
        }
    }
    async getNotesByCategory(req, res) {
        try {
            const { categoryId } = req.params;
            const notes = await noteService.getNotesByCategory(Number(categoryId));
            return handleSuccess(res, notes, 'Notas filtradas por categoría obtenidas exitosamente.');
        }
        catch (error) {
            return handleError(res, error, 'Error al obtener notas por categoría.');
        }
    }
}
