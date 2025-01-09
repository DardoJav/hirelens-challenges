import { NoteRepository } from '../repositories/note.repository.js';
import { Note } from '../models/note.model.js';

const noteRepository = new NoteRepository();

export class NoteService {
    async createNote(data: { title: string; content: string; userId: number }): Promise<Note> {
        return await noteRepository.create(data);
    }

    async updateNote(id: number, data: Partial<Note>): Promise<Note | null> {
        return await noteRepository.update(id, data);
    }

    async deleteNote(id: number): Promise<boolean> {
        return await noteRepository.delete(id); // Elimina físicamente la nota
    }

    async getActiveNotes(userId: number): Promise<Note[]> {
        return await noteRepository.findAllByUserId(userId, false); // Notas no archivadas
    }

    async getArchivedNotes(userId: number): Promise<Note[]> {
        return await noteRepository.findAllByUserId(userId, true); // Notas archivadas
    }

    async addCategoryToNote(noteId: number, categoryId: number): Promise<void> {
        await noteRepository.addCategory(noteId, categoryId);
    }

    async removeCategoryFromNote(noteId: number, categoryId: number): Promise<void> {
        await noteRepository.removeCategory(noteId, categoryId);
    }

    async getNotesByCategory(categoryId: number): Promise<Note[]> {
        return await noteRepository.findByCategory(categoryId);
    }
}
