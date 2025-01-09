import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.js';
export class Category extends Model {
}
Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Category',
    tableName: 'category',
    timestamps: false,
});
// este es un final que me mostro el otro chatgpt
// Note.belongsToMany(Category, { through: 'NoteCategory', foreignKey: 'noteId' });
// Category.belongsToMany(Note, { through: 'NoteCategory', foreignKey: 'categoryId' });
