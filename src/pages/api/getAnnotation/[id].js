import { connectToDatabase } from "@/util/mongodb";
const { ObjectID } = require("mongodb");

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { db } = await connectToDatabase();
    
    const id = req.query.id;
    
    const annotationRecord = await db
      .collection("annotations")
      .findOne({ '_id': ObjectID(id) })

    const imageID = annotationRecord.imageID
    //console.log(annotationRecord.imageID)

    const imageRecord = await db
      .collection("Image")
      .findOne({ '_id': ObjectID(imageID) })
    
    //console.log(annotationRecord)
    //console.log(imageRecord)

    const data = {
      imageID: imageID,
      url: imageRecord.url,
      selectedObjects: annotationRecord.selectedObjects,
      detectedObjects: imageRecord.detectedObjects,
      newObjects: annotationRecord.newObjects,
      accessibilityRating: annotationRecord.accessibilityRating,
      pavementType: annotationRecord.pavementType,
      username: annotationRecord.username,
      date: annotationRecord.date
    }


    res.json(data);
  }
}

export default handler;
