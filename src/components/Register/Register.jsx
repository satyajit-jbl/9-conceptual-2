import React, { useContext, useState } from 'react';
import { useActionData } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const {handleRegister,manageProfile} = useContext(authContext)
    // Error checking, Validation
    const [error, setError] = useState("")
    const handleSubmit=(e) =>{
        e.preventDefault()
        // to remore error message set error ("")
        setError("")
        const name = e.target.name.value 
        const image = e.target.image.value
        const email = e.target.email.value 
        const password = e.target.password.value 
        const conPassword = e.target.conPassword.value 
        //confirm password
        if(password != conPassword){
            setError("Password didnt match")
            return;
        }
        if(!/[a-z]/.test(password)){
            setError("Password must contain at least one lowercase letter")
            return;
        }
        console.log(name, image, email, password, conPassword);

        handleRegister(email, password)
        .then(res=>{
            manageProfile(name, image)
        })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    Name <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-error w-full max-w-xs"
                        name='name' />
                </div>
                <div>
                    Image <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-error w-full max-w-xs"
                        name='image' />
                </div>
                <div>
                   email  <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-error w-full max-w-xs"
                        name='email' required />
                </div>
                <div>
                   password <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-error w-full max-w-xs"
                        name='password' />
                </div>
                <div>
                   Confirm password <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-error w-full max-w-xs" 
                        name='conPassword'/>
                </div>
                <button type='submit'>Register</button>

            </form>
            {/* Error print */}
            {
                error ? <p className='text-red-700'>{error}</p> : ""
            }
        </div>
    );
};

export default Register;