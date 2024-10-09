import { PrismaClient } from "@prisma/client/extension";

declare global {
  var prisma: PrismaClient | undefined;
}

// Create a new Prisma client if no client instance exists globally or reuse the existing one
export const db = globalThis.prisma || new PrismaClient();

// If the environment is not production, store the Prisma client globally to avoid re-instantiating
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
