import helper from '../../Components/Helper/helper'
export default async function handler(req, res) {

  if(req.method==='POST'){

    const {title,description} = req.body;

    const recData = {
      title,
      description
    }

    
    const client = await helper()
    const db = client.db()
    const existingUser = await db.collection('posts').findOne({title:title})

    if(existingUser){
      res.status(200).json({ message:'UserName already taken' })
      client.close()
      return
    }

    const user = await db.collection('posts').insertOne(recData)

  res.status(200).json({ message:'Create Post Successfully' })
  client.close()
  }
}


