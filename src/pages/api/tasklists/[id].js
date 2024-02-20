import { authOptions } from "@/utils/auth";
import { dbConnect } from "../../../utils/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const data = req.body || {};
  const client = await dbConnect();
  const db = client.db("ToDo");
  const userCollection = db.collection(session.user.email);

  const { id } = req.query;

  if (req.method === "PUT") {
    data._id = new ObjectId(data._id);
    try {
      await userCollection.replaceOne({ _id: data._id}, data);
      res.status(201).json({message: `List ${id} updated`});
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  client.close();
}

export default handler;