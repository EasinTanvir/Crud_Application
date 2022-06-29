import { useRouter } from 'next/router'
import {getSession} from 'next-auth/react'
import DeletePost from '../../../Components/Posts/DeletePost'


export default function Delete() {
    const router = useRouter()

    const userId = router.query.delete;
    
  return (
    <div>
      <DeletePost userId={userId}/>
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
