import { DB } from "../deps";
import { config } from "../deps";
import { createClient } from "https://esm.sh/@libsql/client@0.6.0/web";

const env = config();
const db = new DB(Deno.env || "turso_database.db");

export default db;

console.log(Deno.env.get("TURSO_DATABASE_URL"));
console.log(Deno.env.get("TURSO_AUTH_TOKEN"));

export const turso = createClient({
    url: Deno.env.get("TURSO_DATABASE_URL"),
    authToken: Deno.env.get("TURSO_AUTH_TOKEN"),
});
