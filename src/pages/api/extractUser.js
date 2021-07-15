import { connectToDatabase } from "@/util/mongodb";

// Extracts info from the logged in user to get activities, total annotations, etc
const handler = async (req, res) => {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();
    const annotationTotalCount = req.body;

    const imgRecords = await db
      .collection("Image")
      .aggregate([{ $sample: { size: annotationTotalCount } }])
      .toArray();

    res.json({
      imgRecords: imgRecords,
    });
  }
};

export default handler;
