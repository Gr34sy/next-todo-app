// password db EMiwXmNIgzBHAzF5
import { MongoClient } from "mongodb";

export async function dbConnect() {
  try {
    return MongoClient.connect(process.env.DB_CREDENTIALS);
  } catch {
    res.status(500).json({message: 'Could not connect to MongoDB'});
    return
  }
}
