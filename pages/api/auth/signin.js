import Auth from "../../../Components/Helper/auth";
import helper from '../../../Components/Helper/helper'

export default async function SignIn(req,res){

    if(req.method==='POST'){
        const client = await helper()

        const {email,password} = req.body;

        if(!email || !password || password.trim().length<8){
            res.status(200).json({message:'password must be 8 character'})
            client.close()
            return
    
        }

        const hashPass =await Auth(password)

        const recData = {
            email,
            password:hashPass
        }

        
        const db = client.db()

        const existinguser = await db.collection('signin').findOne({email:email})

        if(existinguser){

            res.status(200).json({message:'Sorry email alreay taken'})
            client.close()
            return
    

        }

        const user = await db.collection('signin').insertOne(recData)

        res.status(200).json({message:'Create user successfully'})
        client.close()

    }

}