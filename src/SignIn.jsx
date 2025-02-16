import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
import axios from "axios"

const SignIn = () => {
    const {register,handleSubmit,formState:{
        errors
    }} = useForm();
    const navigate = useNavigate();
    const [error,setError] = useState("");
    const submitHandler = async(data) => {
        try {
          
          const response = await axios.post("https://67b00f44dffcd88a67884114.mockapi.io/api/post/",{
            data
          },{
            withCredentials: true,
          });
          if(response.status == 200){

            console.log("login successful");
            navigate("/");
          }
        } catch (error) {
          console.error("error message",error.message);
          setError(error.response?.data?.message || 'An error occurred. Please try again.');
        }
        
    }
  return (
<div className="w-screen h-screen flex justify-center items-center bg-gray-100">
  <form
    className="flex flex-col gap-4 p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-md bg-white"
    onSubmit={handleSubmit(submitHandler)}
  >
    
    {/* State Message */}
    {error && <p className="text-gray-700 text-center">{error}</p>}

    {/* Email Input */}
    <input
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      type="email"
      placeholder="Enter your email"
      {...register("email", { required: "Email is required" })}
    />
    {errors.email && <span className="text-red-500">{errors.email?.message}</span>}

    {/* Password Input */}
    <input
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      type="password"
      placeholder="Enter your password"
      {...register("password", { required: "Password is required" })}
    />
    {errors.password && <span className="text-red-500">{errors.password?.message}</span>}

    {/* Login Button */}
    <button
      className="bg-blue-500 hover:bg-blue-600 text-blue-500 font-bold py-2 px-4 rounded-md transition duration-200"
      type="submit"
    >
      Login
    </button>

    {/* Signup Section */}
    <div className="flex justify-between items-center">
      <p className="text-gray-700">New user?</p>
      <button
        className="bg-green-500 hover:bg-green-600 text-blue-500 font-bold py-2 px-4 rounded-md transition duration-200"
        onClick={() => navigate("/SignUp")}
      >
        Sign Up
      </button>
    </div>
  </form>
</div>

  )
}

export default SignIn