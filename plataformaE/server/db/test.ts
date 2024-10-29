import turso from "./db.ts";

await turso.execute("SELECT * FROM usuarios");
