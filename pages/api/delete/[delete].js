import { ObjectId } from "mongodb"
import helper from "../../../Components/Helper/helper"

export default async function Delete(req,res){

    if(req.method!=='DELETE'){
        return
    }

    const userId = req.query.delete

    const client = await helper()
    const db = client.db()
    const user = await db.collection('posts').deleteOne({_id:ObjectId(userId)})

    res.status(200).json({message:'Delete stream successfully'})

    client.close()

}