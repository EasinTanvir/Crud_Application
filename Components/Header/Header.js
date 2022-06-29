import {useSession} from 'next-auth/react'
import {signOut} from 'next-auth/react'
import Link from 'next/link'
import classes from './header.module.css'

export default function Header() {

  const {data:session,status} = useSession()

  const loading = status==='loading'

  function onClickHandler(){
    signOut()
  }

  return (
   <div className={classes.main}>
     <div className={classes.header}>
        <div>
       {session && <Link href='/posts'>AllPosts</Link>}
        </div>
        <div className={classes.btn}>            
           {!session && !loading &&  <Link href='/'>LogIn</Link>}
            {session && <button onClick={onClickHandler}>LogOut</button>}
           
        </div>
    </div>
   </div>
  )
}
