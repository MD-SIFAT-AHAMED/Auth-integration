import React, { use, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";

const SignUp = () => {

  const {createUser,updateUserName} = use(AuthContext);
  const [success,setSuccess] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const [showPassword,setShowPassword] = useState(false);
    const handlerSingUp=(e)=>{
       e.preventDefault();
       
       const name = e.target.name.value;
       const email = e.target.email.value;
       const password = e.target.password.value;
      
       setErrorMessage('');
       setSuccess('');

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
      if(!passwordRegex.test(password))
      {
        setErrorMessage("At least one lowercase and uppercase latter and one number and 6 characters");
        return;
      }

       createUser(email,password)
       .then(()=>{
        const userName ={
          displayName:name
        }
        updateUserName(userName);
        setSuccess("User Create Success");
       })
       .catch((err)=>{
        setErrorMessage(err.code);
       })
      
    }

  return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl text-center font-semibold">Please Sign Up</h1>
            <form onSubmit={handlerSingUp} className="fieldset">
                {/* name field */}
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="Name" />
                {/* email field */}
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              {/* password field */}
              <div className="relative">
                <label className="label">Password</label>
                <input type={showPassword ? "text" : "password"} name="password" className="input" placeholder="Password" />
                <button 
                onClick={()=>setShowPassword(!showPassword)}
                type="button"
                className="absolute top-7 right-7">
                { showPassword ? <IoMdEye size={16} /> : <IoMdEyeOff size={16}/>}
                </button>
              </div>
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
            {success && <p className="text-green-500 text-center">{success}</p>}
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
            <p className=" text-center">You have an Account? <Link to={'/login'} className="text-blue-500 ml-1 underline">login</Link></p>
          </div>
        </div>
  );
};

export default SignUp;
