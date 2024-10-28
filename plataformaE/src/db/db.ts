// db/db.ts

import { DB } from "../deps.ts";
import { config } from "../deps.ts";

const env = config();

// Turso connection configuration (substitute these with your actual values)
const db = new DB(env.TURSO_DB_PATH || "turso_database.db");

export default db;
