import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const {handleGoogleLogin, handleLogin,handleLogout} = useContext(authContext);
    const [error, setError] = useState("")
    
    const handleSubmit=(e) =>{
        e.preventDefault()
        setError("")
        const email = e.target.email.value 
        const password = e.target.password.value 
        
        handleLogin(email, password)
        .then(res=>{})
        .catch(err=>{
            setError(err.message)
        })
    }
    
    // console.log(contextValue);
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
               
                
                <div>
                   email  <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-error w-full max-w-xs"
                        name='email' />
                </div>
                <div>
                   password <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-error w-full max-w-xs"
                        name='password' />
                </div>
               
                <button type='submit'>Login</button>
                <button onClick={handleLogout}>Logout</button>
                <button onClick={handleGoogleLogin}>Google Login</button>
            </form>
            {
                // use split and slice to format the error message
                error && <p className='text-red-600'>{error.split("/")[1].slice(0,18)}</p>
            }
        </div>
    );
};

export default Login;