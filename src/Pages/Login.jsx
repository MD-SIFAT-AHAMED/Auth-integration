import React, { use, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
    const [success,setSuccess]=useState('');
    const [showPassword,setShowPassword]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const {loginUser,signInWithGoogle} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const hadlerLogin=(e)=>{
        e.preventDefault();

        const email= e.target.email.value;
        const password= e.target.password.value;

        loginUser(email,password)
        .then(()=>{
            setSuccess("User Login success");
            navigate(location?.state || '/');
            e.target.reset();
        })
        .catch((err)=>{
            setErrorMessage(err.code);
        })
    }

    const HandlersignInWithGoogle=()=>{
      signInWithGoogle()
      .then(()=>{
        setSuccess("User Login success");
        navigate(location?.state || '/');
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
                      <span className='text-center'>Or</span>
                      <button onClick={HandlersignInWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                      </button>
                  </div>
                </div>
    );
};

export default Login;