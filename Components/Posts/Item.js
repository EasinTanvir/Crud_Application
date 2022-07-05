import Link from 'next/link'
import classes from './item.module.css'

export default function Item(props) {


 
    const {title,description,id} = props
   
  return (
    <div className={classes.main}>
        <div  className={classes.item}>
      <div>
      <h1>{title}</h1>
       <p>{description}</p>
      </div>
    
    <div className={classes.btn}>
        <Link href={`/posts/edit/${id}`}><a><button>Edit</button></a></Link>
        <Link href={`/posts/delete/${id}`}><button>Delete</button></Link>        
    </div>
    </div>
    </div>
  )
}

