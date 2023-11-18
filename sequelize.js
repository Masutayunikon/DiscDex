import dotenv from 'dotenv';
import { Sequelize} from "sequelize";

dotenv.config();

// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST || 'localhost',
    dialect: 'postgres'
});