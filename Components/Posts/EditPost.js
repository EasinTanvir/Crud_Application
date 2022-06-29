import { useState } from 'react';
import {useRouter} from 'next/router'
import axios from 'axios';
import classes from './create.module.css';

export default function EditPost({list}) {

    const {_id} = list
    

    const router = useRouter()

    const inputValue={title:list.title,description:list.description}

    const [input,setInput] = useState(inputValue)
    const [text,setText] = useState('')

    function onChangeHandler(e){

        const {name,value} = e.target;

        setInput({...input,[name]:value})

    }

   async function onSubmitHandler(e){
        e.preventDefault()

        const recData = {
            newTitle:input.title,
            newDescription:input.description
        }

        const result = await axios.patch(`/api/edit/${_id}`,recData)
        setText(result.data)
        router.replace('/posts')

    }

  return (
   <form onSubmit={onSubmitHandler} className={classes.main}>
   <h1>Update a Post</h1>
   <hr />
     <div className={classes.form}>
        <div>
            <label>Name</label>
            <input value={input.title} name='title' onChange={onChangeHandler} placeholder='type your name' type='text' required/>
        </div>
        <div>
        <label>Description</label>
        <input value={input.description} name='description' onChange={onChangeHandler} placeholder='Description' type='text' required/>
        </div>        
    </div>
    <div className={classes.btn}>
    <button>Submit</button>
    </div>
    <div className={classes.text}>{text && <h2>{text.message}</h2>}</div>
   </form>
  )
}
