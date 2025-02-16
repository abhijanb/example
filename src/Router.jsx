import React from 'react'
import { Route, Routes } from 'react-router'
import SignUp from './Auth/SignUp';
import Home from './Home';
import SignIn from './SignIn';

export const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/signIn' element={<SignIn />} />
        </Routes>
    </div>
  )
}
export default Router;
