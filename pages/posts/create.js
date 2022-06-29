import {getSession} from 'next-auth/react'
import CreatePosts from '../../Components/Posts/CreatePosts'

export default function Create() {
  return (
    <div>
      <CreatePosts />
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

  return {
    props:{session}
  }

}
