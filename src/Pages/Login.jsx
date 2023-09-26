import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Login(){


    const location = useLocation()
    const message = location.state?.message


    const [loginData,setLoginData] = useState({email:'',password:''})

    function handleChange(e){
        const {name,value} = e.target
        setLoginData(prevLoginData=>{
            return{
                ...prevLoginData,
                [name]:value
            }
        })
    }

    function handleSubmit(e){

    }

    useEffect(()=>{ 
        console.log(loginData)
    },[loginData])

    return(
        <div className="container login-container">
            {
                message&&
                <p className="log-in-message">{message}</p>
            }
            <h2>Sign in to your account</h2>
            <div className="login-inputs-container">
                <input
                    className="login-input" type="text" 
                    placeholder="Email adress" 
                    name="email"
                    onChange={handleChange}
                 />
                <input 
                    className="login-input" type="password" 
                    placeholder="Password" 
                    name="password"
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Sign in</button>
                <p>Don't have an account?<span><Link> Create one now</Link></span></p>
            </div>
        </div>
    )
}