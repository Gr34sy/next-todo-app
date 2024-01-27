// password db EMiwXmNIgzBHAzF5
import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB connected");
  } catch (error){
    console.log(error);
    res.status(500).json({message: 'Could not connect to MongoDB'});
  }
}
