import { dbConnect } from "@/utils/dbConnect";


function handler(req, res){


    if(req.method='GET'){
        const db = dbConnect('ToDo');

        console.log(db);
        res.status(201).json({message: 'Success'});
    }
}

export default handler;