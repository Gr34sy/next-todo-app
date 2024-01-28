import { authOptions } from "@/utils/auth";
import { dbConnect } from "../../utils/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  const data = req.body || {};
  const client = await dbConnect();
  const db = client.db("ToDo");
  const userCollection = db.collection(session.user.email);

  if (req.method == "POST") {
    try {
      await userCollection.insertOne(data);
      res
        .status(201)
        .json({ message: `List added to  ${session.user.email}`, insertedList: data });
    } catch (err) {
      res.status(500).json({ message: err.message})
    }
    client.close();
  }

  if (req.method === "PUT") {
    // const result = await collection.replaceOne({ _id: data._id}, data);
    // res.status(201).json({message: 'List updated!'});
  }
}

export default handler;
