import { authOptions } from "@/utils/auth";
import { dbConnect } from "../../../utils/db";
import { getServerSession } from "next-auth";

async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const data = req.body;

  const client = await dbConnect();
  const db = client.db("ToDo");
  const userCollection = db.collection(session.user.email);

  let config = await userCollection.findOne({ type: "config" });
  if (!config) {
    try {
      await userCollection.insertOne({ type: "config", theme: "default" });
      config = { type: "config", theme: "default" };
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  if (req.method === "GET") {
    try {
      res.status(201).json({
        message: `Retrieved the config of ${session.user.email}`,
        theme: config.theme,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  if (req.method === "PUT") {
    const updatedConfig = { ...config, theme: data.theme };

    try {
      await userCollection.replaceOne({ type: "config"}, updatedConfig);
      res.status(201).json({
        message: `Config of ${session.user.email} changed`,
        config: updatedConfig,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  client.close();
}

export default handler;
