import Link from 'next/link'
import Item from './Item'
import classes from './posts.module.css'

export default function MyPosts(props) {
  const {list} = props
  
  
  return (
   <div>
     <div>
      {list.map((data)=><Item key={data._id} title={data.title} description={data.description} id={data._id}/>)}
    </div>
    <div className={classes.btn}>
    <Link href='/posts/create'><a><button>Create a Post</button></a></Link>
    </div>
   </div>
  )
}


