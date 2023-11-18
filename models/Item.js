import { Model, DataTypes} from "sequelize";
import sequelize from "sequelize.js";

class Item extends Model {}

Item.init({
    item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    effect: { type: DataTypes.STRING }
}, {
    sequelize,
    modelName: 'Item',
    tableName: 'Items',
    timestamps: false
});

export default Item;