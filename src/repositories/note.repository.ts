import { Note } from '../models/note.model.js';
import { Category } from '../models/category.model.js';

export class NoteRepository {
    async create(data: Partial<Note>): Promise<Note> {
        const { title, content, archived = false, userId } = data;

        if (!title || !content || userId === undefined) {
            throw new Error('Faltan propiedades requeridas para crear una nota.');
        }

        return await Note.create({
            title,
            content,
            archived,
            userId,
        });
    }

    async findAllByUserId(userId: number, archived: boolean): Promise<Note[]> {
        return await Note.findAll({
            where: { userId, archived },
        });
    }

    async findById(id: number): Promise<Note | null> {
        return await Note.findOne({ where: { id } });
    }

    async update(id: number, data: Partial<Note>): Promise<Note | null> {
        const note = await this.findById(id);
        if (!note) return null;
        return await note.update(data);
    }

    async delete(id: number): Promise<boolean> {
        const note = await this.findById(id);
        if (!note) return false;
        await note.destroy(); // Elimina físicamente la nota
        return true;
    }

    async addCategory(noteId: number, categoryId: number): Promise<void> {
        const note = await this.findById(noteId);
        if (note) {
            const category = await Category.findByPk(categoryId);
            if (category) {
                await note.addCategory(category);
            }
        }
    }

    async removeCategory(noteId: number, categoryId: number): Promise<void> {
        const note = await this.findById(noteId);
        if (note) {
            const category = await Category.findByPk(categoryId);
            if (category) {
                await note.removeCategory(category);
            }
        }
    }

    async findByCategory(categoryId: number): Promise<Note[]> {
        return await Note.findAll({
            include: {
                model: Category,
                where: { id: categoryId },
            },
        });
    }
}
