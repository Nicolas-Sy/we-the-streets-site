import nextConnect from "next-connect";
import bcrypt from "bcryptjs";

import middleware from "@/middleware";
import { connectToDatabase } from "@/util/mongodb";

const handler = nextConnect();
handler.use(middleware);

// POST /api/auth/register
handler.post(async (req, res) => {
  const { db } = await connectToDatabase();

  // Required fields are done on the front end
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  // if (db.collection("users").countDocuments({ email })) {
  //   res.status(403).send("The email has already been used.");
  // }
});

export default handler;
