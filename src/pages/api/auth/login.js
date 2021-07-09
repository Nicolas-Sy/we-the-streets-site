import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/util/mongodb";

const handler = async (req, res) => {
  console.log("api login");
  if (req.method === "POST") {
    console.log("post login");
    const { db } = await connectToDatabase();

    // Required fields are done on the front end
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db
      .collection("users")
      .findOne({ username, hashedPassword });

    if (user) res.status(201).json(user);
    else {
      res.status(403).send("Invalid Credentials");
    }
  }
};

export default handler;
