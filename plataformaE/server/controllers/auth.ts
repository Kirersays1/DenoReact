/// server/controllers/auth.ts

import { RouterContext, Context } from "../deps";
import db from "../../client/src/db/db";
import { bcrypt } from "../deps";

interface LoginRequest {
    email: string;
    password: string;
}

export const loginUser = async (ctx: RouterContext<"/login">) => {
    try {
        const body = ctx.request.body({ type: "json" });
        const { email, password }: LoginRequest = await body.value;

        // Check if the user exists in the database
        const result = db.query<[number, string, string]>(
            "SELECT id, password_hash, role FROM users WHERE email = ?",
            [email]
        );

        if (result.length === 0) {
            ctx.response.status = 400;
            ctx.response.body = { message: "Invalid email or password" };
            return;
        }

        const [userId, passwordHash, role] = result[0];

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, passwordHash);
        if (!isPasswordValid) {
            ctx.response.status = 400;
            ctx.response.body = { message: "Invalid email or password" };
            return;
        }

        ctx.response.status = 200;
        ctx.response.body = { message: "Login successful", userId, role };
    } catch (error) {
        console.error("Login Error:", error);
        ctx.response.status = 500;
        ctx.response.body = { message: "Internal Server Error" };
    }
};
