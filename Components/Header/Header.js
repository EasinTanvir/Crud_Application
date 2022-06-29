import Link from 'next/link'
import classes from './header.module.css'

export default function Header() {
  return (
   <div className={classes.main}>
     <div className={classes.header}>
        <div>
       <Link href='/posts'>AllPosts</Link>
        </div>
        <div>
            <Link href='/posts/create'>CreatePosts</Link>
        </div>
    </div>
   </div>
  )
}
