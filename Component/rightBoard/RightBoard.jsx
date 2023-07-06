import React from 'react'
import SignIn from './SignIn'
import LoginForm from './LoginForm'
import "./RightBoard.css"
import { signIn } from "next-auth/react"


const RightBoard = () => {

  const handleClick = () => {
    signIn('google', { callbackUrl: '/dashboard' })
  }
  return (
    <div className='main-cont'>
        <div className='login-label'>
            <h3 >Sign In</h3>
            <h4 > Sign in to your account</h4>
        </div>
        <div className='flex signin-cont'>
          <div onClick={handleClick}><SignIn logo="/google-icon.svg" text="Google"></SignIn></div>
          <SignIn logo="/apple.png" text="Apple"></SignIn>
        </div>
        <div>
          <LoginForm/>
        </div>
        <div className='cont-footer'>
          <p>Don’t have an account? <span>Register here</span></p>
        </div>
    </div>
  )
}

export default RightBoard