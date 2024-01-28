// password db EMiwXmNIgzBHAzF5
import { MongoClient } from "mongodb";

export async function dbConnect() {
  try {
    return await MongoClient.connect(process.env.DB_URI);
  } catch (error){
    console.log(error);
  }
}