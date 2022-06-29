import axios from 'axios'
import {useRouter} from 'next/router'
import classes from './delete.module.css'

export default function DeletePost({userId}) {

    const router = useRouter()
    
    function onClickHandler(){

        router.replace('/posts')

    }

   async function DeleteHandler(){

    const result = await axios.delete(`/api/delete/${userId}`)
    console.log(result.data)
    router.replace('/posts')



    }


  return (
    <div className={classes.delete}>
        <h1>Are you sure you want to Delete</h1>
       <div className={classes.btn}>
       <button onClick={DeleteHandler}>Yes</button>
        <button  onClick={onClickHandler}>No</button>
       </div>
    </div>
  )
}
