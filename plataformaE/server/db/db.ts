import { createClient } from "https://esm.sh/@libsql/client@0.6.0/web";


export const turso = createClient({
    url: "libsql://plataformamoodle-evermako.turso.io",
    authToken:"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzAxMzA4MjIsImlkIjoiODBhMjZmMDEtMTVmYS00NTE4LTk4MmMtMzM4MWNkYzVhMzI2In0.MBl7nk9cMChjyle_yuzw6ZNyr9gaZXPu9DY-GOI4QCiGOgEn79eSQZ1yI0TUl8P9045SCXCjOhGPEqZUzLFTAw"
});

console.log(await turso.execute("SELECT * FROM usuario"));