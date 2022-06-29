import {useState} from 'react'
import { useRouter } from 'next/router'
import {signIn} from 'next-auth/react'
import axios from 'axios'
import classes from './form.module.css'

export default function LogInForm() {

    const router = useRouter()

    const [text,setText] = useState()

  const [sign,setSign] = useState(true)

  const formValue={email:'',password:''}

  const [input,setInput]=useState(formValue)


 

  function onChangeHandler(e){
    const {name,value} = e.target;

    setInput({...input,[name]:value})
  }

 async function onSubmitHandler(e){
    e.preventDefault()

    if(sign){

       const result = await signIn('credentials',{
        redirect:false,
        email:input.email,
        password:input.password
       })

       setText(result)

       if(!result.error){

       router.replace('/posts')
       }

    }else{

    const recData = {
        email:input.email,
        password:input.password
    }

    const result = await axios.post('/api/auth/signin',recData)
    setText(result.data)

}

  }

  return (
 
        <form
    onSubmit={onSubmitHandler}
     className={classes.main}>
        <div  className={classes.form}>
            <div className={classes.text}><h1>Login Form</h1></div> 
            <hr />           
           <div className={classes.login}>
           <div>               
               <input name='email' onChange={onChangeHandler} required type='email' placeholder='type your email'/>
           </div>
           <div>               
               <input name='password' onChange={onChangeHandler} required type='password' placeholder='type your password'/>
           </div>
           </div>
            <div className={classes.submit}>
                <button>{sign?'LogIn':'Registar'}</button>
            </div>
            <div style={{color:'red',fontStyle:'italic',marginTop:'20px' }}>{text && <h3>{text.message}</h3>}</div>
            <div style={{color:'red',fontStyle:'italic',marginTop:'20px' }}>{text && <h3>{text.error}</h3>}</div>
            <div className={classes.btn}>
                
                <button onClick={()=>setSign(!sign)}>{sign?'Create an acoount':'LogIn with existing account'}</button>
                {sign? (<button onClick={()=>signIn('google')}><i className="fa-brands fa-google"></i> SignIn With Goggle</button>):''}
            </div>
        </div>
    </form>
   
  )
}
