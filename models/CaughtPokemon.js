import { Model, DataTypes} from "sequelize";
import sequelize from "sequelize.js";

class CaughtPokemon extends Model {}

CaughtPokemon.init({
    caught_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, references: { model: 'User', key: 'user_id' } },
    pokemon_id: { type: DataTypes.INTEGER, references: { model: 'Pokemon', key: 'pokemon_id' } },
    catch_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    nickname: { type: DataTypes.STRING }
}, {
    sequelize,
    modelName: 'CaughtPokemon',
    tableName: 'CaughtPokemons',
    timestamps: false
});

export default CaughtPokemon;