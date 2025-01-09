import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.js';
import bcrypt from 'bcrypt';
export class User extends Model {
}
User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
});
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    timestamps: false, // Desactiva createdAt y updatedAt
});
