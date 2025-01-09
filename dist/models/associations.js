import { Note } from './note.model.js';
import { Category } from './category.model.js';
export const setupAssociations = () => {
    Note.belongsToMany(Category, { through: 'NoteCategory' });
    Category.belongsToMany(Note, { through: 'NoteCategory' });
};
