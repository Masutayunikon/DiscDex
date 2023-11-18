import { Model, DataTypes} from "sequelize";
import sequelize from "sequelize.js";

class PokedexEntry extends Model {}

PokedexEntry.init({
    pokedex_entry_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, references: { model: 'User', key: 'user_id' } },
    pokemon_id: { type: DataTypes.INTEGER, references: { model: 'Pokemon', key: 'pokemon_id' } },
    seen: { type: DataTypes.BOOLEAN, allowNull: false },
    caught: { type: DataTypes.BOOLEAN, allowNull: false }
}, {
    sequelize,
    modelName: 'PokedexEntry',
    tableName: 'PokedexEntries',
    timestamps: false
});

export default PokedexEntry;