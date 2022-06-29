import {getSession} from 'next-auth/react'
import LogInForm from "../Components/Form/LogInForm";

export default function Home() {
  return (
  <div>
    <LogInForm />
  </div>
  )
}


export async function getServerSideProps(context){

  const session = await getSession({req:context.req})

  if(session){
    return {
      redirect:{
        destination:'/posts',
        parmanent:false
      }
    }
  }

  return{
    props:{session}
  }

}