import React, { useContext } from 'react';
import { useActionData } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const {handleRegister} = useContext(authContext)
    const handleSubmit=(e) =>{
        e.preventDefault()
        const name = e.target.name.value 
        const image = e.target.image.value
        const email = e.target.email.value 
        const password = e.target.password.value 
        const conPassword = e.target.conPassword.value 
        console.log(name, image, email, password, conPassword);

        handleRegister(email, password)
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
                        name='email' />
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
        </div>
    );
};

export default Register;