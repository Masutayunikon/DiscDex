import { Model, DataTypes} from "sequelize";
import sequelize from "sequelize.js";

class User extends Model {}

User.init({
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false },
    join_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    last_active_date: { type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: false
});

export default User;