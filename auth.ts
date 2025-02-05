import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import type { Admin } from "@/app/lib/definitions";
import bcrypt from "bcrypt";

async function getAdmin(email: string): Promise<Admin | undefined> {
  try {
    const admin = await sql<Admin>`SELECT * FROM admins WHERE email=${email}`;
    return admin.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const admin = await getAdmin(email);
          if (!admin) return null;
          const passwordsMatch = await bcrypt.compare(password, admin.password);

          if (passwordsMatch) return admin;
        }
        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
