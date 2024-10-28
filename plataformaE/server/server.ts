// server/server.ts

import { Application } from "./deps";
import authRoutes from "./routes/auth";
import { config } from "./deps";

const env = config();
const PORT = Number(env.PORT) || 8000;

const app = new Application();

app.use(authRoutes.routes());
app.use(authRoutes.allowedMethods());

console.log(`Server is running on http://localhost:${PORT}`);

await app.listen({ port: PORT });
