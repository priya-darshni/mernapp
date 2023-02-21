import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [cred, setcred] = useState({email:"",password:""})
  let navigate= useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({email:cred.email,password:cred.password}));
        const response = await fetch("http://localhost:3001/api/login",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:cred.email,password:cred.password})
        })
        const json=await response.json();
        console.log(json);
        if(!json.success){
              alert("enter valid credentials")
        }
        if(json.success){
          localStorage.setItem("authToken",json.authToken);
          navigate("/");
    }
    }
    
    const onChange = (event)=>{
        setcred({...cred,[event.target.name]:event.target.value
        })
    }
  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={cred.email} onChange={onChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>s
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={cred.password} onChange={onChange}/>
  </div>
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  
</form>
</div>
    </>
  )
}
