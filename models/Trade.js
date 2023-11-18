import { Model, DataTypes} from "sequelize";
import sequelize from "sequelize.js";

class Trade extends Model {}

Trade.init({
    trade_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id_sender: { type: DataTypes.INTEGER, references: { model: 'User', key: 'user_id' } },
    user_id_receiver: { type: DataTypes.INTEGER, references: { model: 'User', key: 'user_id' } },
    pokemon_id: { type: DataTypes.INTEGER, references: { model: 'Pokemon', key: 'pokemon_id' } },
    trade_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    status: { type: DataTypes.STRING, defaultValue: 'pending', validate: { isIn: [['pending', 'completed', 'cancelled']] } }
}, {
    sequelize,
    modelName: 'Trade',
    tableName: 'Trades',
    timestamps: false
});

export default Trade;