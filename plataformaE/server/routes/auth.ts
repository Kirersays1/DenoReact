// server/routes/auth.ts

import { Router } from "../deps";
import { loginUser } from "../controllers/auth";

const router = new Router();

router.post("/login", loginUser);

export default router;
