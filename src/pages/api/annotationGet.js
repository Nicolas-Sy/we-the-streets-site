import { connectToDatabase } from "@/util/mongodb";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { db } = await connectToDatabase();
    const { imgRecordNumber } = req.body;

    const imgRecords = await db
      .collection("Image")
      .aggregate([{ $sample: { size: imgRecordNumber } }])
      .toArray();

    res.json({
      imgRecords: imgRecords,
    });
  }
};

export default handler;
