import {
    DataTypes,
    Model,
    Optional,
    Association,
    BelongsToManyAddAssociationMixin,
    BelongsToManyRemoveAssociationMixin
} from 'sequelize';
import { sequelize } from '../config/database.js';
import { User } from './user.model.js';
import { Category } from './category.model.js';

interface NoteAttributes {
    id: number;
    title: string;
    content: string;
    archived: boolean;
    userId: number;
}

export interface NoteCreationAttributes extends Optional<NoteAttributes, 'id'> { }

export class Note extends Model<NoteAttributes, NoteCreationAttributes> {
    public id!: number;
    public title!: string;
    public content!: string;
    public archived!: boolean;
    public userId!: number;

    // Métodos generados por belongsToMany
    public addCategory!: BelongsToManyAddAssociationMixin<Category, number>;
    public removeCategory!: BelongsToManyRemoveAssociationMixin<Category, number>;

    public static associations: {
        categories: Association<Note, Category>;
    };
}

Note.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        archived: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Note',
        tableName: 'note',
        timestamps: false, // Desactiva createdAt y updatedAt
    }
);

User.hasMany(Note, { foreignKey: 'userId' });
Note.belongsTo(User, { foreignKey: 'userId' });
