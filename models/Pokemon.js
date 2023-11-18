import { Model, DataTypes} from "sequelize";
import sequelize from "sequelize.js";

class Pokemon extends Model {}

Pokemon.init({
    pokemon_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING },
    base_stats: { type: DataTypes.JSONB },
    sprite_url: { type: DataTypes.STRING }
}, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'Pokemons',
    timestamps: false
});

export default Pokemon;