import { dbConnect } from "@/utils/dbConnect";
import { ObjectId } from "mongodb";

async function handler(req, res){
    const client = await dbConnect();
    const db = client.db("ToDo");
    const collection =  db.collection('Dummy List')

    const data  = {
        _id: new ObjectId(req.body.list_id),
        title: req.body.title,
        tasks: req.body.tasks,
    }

    if(req.method==='POST'){
        const result = await collection.replaceOne({ _id: data._id}, data);
        res.status(201).json({message: 'List updated!'});
    }

    client.close();
}

export default handler;