import Image from 'next/image'
import React from 'react'
import "./RightBoard.css"

const SignIn = ({logo , text}) => {
  return (
    <div className='signIn'>
      <button className='flex justify-between w-[180px] h-[30px] align-middle'>
      <Image src={logo} width="14" height="14" className='signin-img' alt='logo'></Image>
      <span>Sign In With {text}</span>
      </button>
    </div>
  )
}

export default SignIn