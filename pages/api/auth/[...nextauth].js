import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials'
import  { ChechPassword }  from '../../../Components/Helper/auth'
import helper from '../../../Components/Helper/helper'

export default NextAuth({

    session: {
        strategy: "jwt"
    },

    providers:[
        CredentialsProvider({
            async authorize(credentials){

                const client = await helper()
                const db = client.db()
                const user = await db.collection('signin').findOne({email:credentials.email})

                if(!user){  
                    client.close()                  
                    throw new Error('No user found')    

                   
                }

                const hashPassword = await ChechPassword(credentials.password,user.password)

                if(!hashPassword){
                    client.close()                  
                    throw new Error('Invalid password')    
                }
                
                client.close
                
                return {email:credentials.email}
                
                

            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
    ],
    secret:'secret'
})
