import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

/**
 * Better Auth API routes
 * Handles all authentication endpoints automatically
 * https://www.better-auth.com/docs/installation#mount-handler
 */
export const { GET, POST } = toNextJsHandler(auth);
