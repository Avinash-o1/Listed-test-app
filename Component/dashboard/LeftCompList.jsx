import Image from 'next/image';
import React from 'react'

const leftCompList = ({logo , text, index}) => {
  return (
    <div>
        <ul>
            <li className='flex left-list' key={index}>
                <Image src={logo} width="10" height="10" alt="logo" className='list-logo'></Image>
                <span className= {text == "Dashboard" ? "font-bold text-white" : "font-extralight text-slate-300"}>{text}</span>
            </li>
        </ul>
    </div>
  )
}

export default leftCompList