import React, { use, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
    const [success,setSuccess]=useState('');
    const [showPassword,setShowPassword]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const {loginUser} = use(AuthContext);

    const hadlerLogin=(e)=>{
        e.preventDefault();

        const email= e.target.email.value;
        const password= e.target.password.value;

        loginUser(email,password)
        .then(()=>{
            setSuccess("User Login success");
            e.target.reset();
        })
        .catch((err)=>{
            setErrorMessage(err.code);
        })
        

    }
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                  <div className="card-body">
                    <h1 className="text-4xl text-center font-semibold">Login</h1>
                    <form onSubmit={hadlerLogin} className="fieldset">
                        {/* email field */}
                      <label className="label">Email</label>
                      <input type="email" name="email" className="input" placeholder="Email" />
                      {/* password field */}
                      <div className="relative">
                        <label className="label mb-1">Password</label>
                        <input type={showPassword ? "text" : "password"} name="password" className="input" placeholder="Password" />
                        <button 
                        onClick={()=>setShowPassword(!showPassword)}
                        type="button"
                        className="absolute top-8 right-7">
                        { showPassword ? <IoMdEye size={16} /> : <IoMdEyeOff size={16}/>}
                        </button>
                      </div>
                      <p className='underline cursor-pointer'>Forgot Password</p>
                      <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    {success && <p className="text-green-500 text-center">{success}</p>}
                    {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                    <p className=" text-center">Don't have an Account? <Link to={'/signUp'} className="text-blue-500 ml-1 underline">sign-Up</Link></p>
                  </div>
                </div>
    );
};

export default Login;