import {getSession} from 'next-auth/react'
import helper from '../../Components/Helper/helper'
import MyPosts from '../../Components/Posts/MyPosts'

export default function AllPosts(props) {
  const {list} = props
  const result = JSON.parse(list)
  
  return (
    <div>
        <MyPosts list={result} />
    </div>
  )
}


export async function getServerSideProps(context){

  const session =await getSession({req:context.req})

  if(!session){
    return{
      redirect:{
        destination:'/',
        parmanent:false
      }
    }
  }

  const client = await helper()
  const db= client.db()
  const user = await db.collection('posts').find().sort({_id:-1}).toArray()
  const final = JSON.stringify(user)

  return {
    props:{
      list:final
    }
  }

}
