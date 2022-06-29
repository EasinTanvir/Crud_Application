import { ObjectId } from 'mongodb';
import helper from '../../../Components/Helper/helper'
export default async function Edit(req,res){

    if(req.method!=='PATCH'){
        return
    }

    const {newTitle,newDescription} = req.body;
    const userId=req.query.edit
    const client = await helper()
    const db = client.db()
    const user = await db.collection('posts').updateMany({_id:ObjectId(userId)},{$set:{title:newTitle,description:newDescription}})

    res.status(200).json({message:'Post Update Successfully'})
    client.close()
}