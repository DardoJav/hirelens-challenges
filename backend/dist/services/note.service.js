import { NoteRepository } from '../repositories/note.repository.js';
const noteRepository = new NoteRepository();
export class NoteService {
    async createNote(data) {
        return await noteRepository.create(data);
    }
    async updateNote(id, data) {
        return await noteRepository.update(id, data);
    }
    async deleteNote(id) {
        return await noteRepository.delete(id); // Elimina físicamente la nota
    }
    async getActiveNotes(userId) {
        return await noteRepository.findAllByUserId(userId, false); // Notas no archivadas
    }
    async getArchivedNotes(userId) {
        return await noteRepository.findAllByUserId(userId, true); // Notas archivadas
    }
    async addCategoryToNote(noteId, categoryId) {
        await noteRepository.addCategory(noteId, categoryId);
    }
    async removeCategoryFromNote(noteId, categoryId) {
        await noteRepository.removeCategory(noteId, categoryId);
    }
    async getNotesByCategory(categoryId) {
        return await noteRepository.findByCategory(categoryId);
    }
}
