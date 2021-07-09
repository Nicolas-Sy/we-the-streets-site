import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/util/mongodb";

const options = {
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { db } = await connectToDatabase();
        const { username, password } = req.body;

        const user = await db.collection("users").findOne({ username });
        if (user && (await bcrypt.compare(password, user.hashedPassword))) {
          return user;
        } else {
          throw new Error("Invalid Credentials"); // Redirect to error page
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    jwt: true,
  },
};

const nextAuthFunction = (req, res) => NextAuth(req, res, options);

export default nextAuthFunction;
