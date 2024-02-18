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

  if (req.method == "PUT") {
    // const result = await collection.replaceOne({ _id: data._id}, data);
    // res.status(201).json({message: 'List updated!'});
  }

  if (req.method === "DELETE") {
    const { id } = req.query;

    try {
      await userCollection.deleteOne({ _id: new ObjectId(id)});
      res.status(201).json({ message: `List with id: ${id} deleted`});
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  client.close();
}

export default handler;