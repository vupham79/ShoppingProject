import { load } from "dotenv";

load();

export const databaseUser = process.env.DATABASE_USER;
export const databasePwd = process.env.DATABASE_PASSWORD;
export const databaseName = process.env.DATABASE_NAME;
export const databaseHost = process.env.DATABASE_HOST;
