import { Model, DataTypes} from "sequelize";
import sequelize from "sequelize.js";

class Inventory extends Model {}

Inventory.init({
    inventory_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, references: { model: 'User', key: 'user_id' } },
    item_id: { type: DataTypes.INTEGER },
    quantity: { type: DataTypes.INTEGER }
}, {
    sequelize,
    modelName: 'Inventory',
    tableName: 'Inventories',
    timestamps: false
});

export default Inventory;
