import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';

const SignUp = () => {
    const { register, handleSubmit,watch, formState: {
        errors
    } } = useForm();
    const navigate = useNavigate();
const [error,setError] = useState();
    const submitHandler = async (data) => {
try {
  
  
  const response = await fetch("link",{
    method: "post",
    headers: {
      'Content-Type' : 'application/json'
    },
    body:{
      data: JSON.stringify(data),
    }
  })
  
  if(!response.ok){
    const APIerror = await response.json();
    setError(APIerror?.message || "something went wrong");
  }
  else { navigate('/');
}} catch (error) {
  console.log("error",error)
  setError(error?.message);
  
}

    }
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
  <form
    onSubmit={handleSubmit(submitHandler)}
    className="flex flex-col gap-4 p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-md "
  >
    {/* First Name */}
    <input
      type="text"
      placeholder="Enter your first name"
      {...register("firstName", { required: "First name is required",
       
       })}
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    {errors.firstName && <span className="text-red-500">{errors.firstName?.message}</span>}

    {/* Last Name */}
    <input
      type="text"
      placeholder="Enter your last name"
      {...register("lastName", { required: "Last name is required" })}
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    {errors.lastName && <span className="text-red-500">{errors.lastName?.message}</span>}

    {/* Email */}
    <input
      type="email"
      placeholder="Enter email"
      {...register("email", { required: "Email is required" })}
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    {errors.email && <span className="text-red-500">{errors.email?.message}</span>}

    {/* Password */}
    <input
      type="password"
      placeholder="Enter password"
      {...register("password", { required: "Password is required" ,
        minLength:{
value:8,
message:"enter more than 8 characters"
        }
      })}
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    {errors.password && <span className="text-red-500">{errors.password?.message}</span>}

    {/* Confirm Password */}
    <input
      type="password"
      placeholder="Confirm password"
      {...register("confirmPassword", {
        required: "Confirm password is required",
        validate: (value) => value === watch("password") || "Passwords do not match",
      })}
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword?.message}</span>}

    {/* Sign Up Button */}
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-blue-500 font-bold py-2 px-4 rounded-md transition duration-200"
    >
      Sign Up
    </button>

    {/* Already a User? */}
    <p className="text-center text-gray-700">Already a user?</p>
    
    {/* Login Button */}
    <button
      type="button"
      onClick={() => navigate("/signIn")}
      className="bg-gray-500 hover:bg-gray-600 text-blue-500  font-bold py-2 px-4 rounded-md transition duration-200"
    >
      Login
    </button>
  </form>
</div>

    )
}

export default SignUp