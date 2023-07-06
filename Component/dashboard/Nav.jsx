import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <div className='flex nav'>
        <h3>Dashboard</h3>
        <div className='flex relative'>
            <input type="search" name="search" id="searchBtn" placeholder='Search'/>
            <Image src= "/Search_icon.svg" height="8" width="8" alt="logo" id='alert-img' className='search-icon absolute'></Image>
            <Image src= "/Vector.svg" height="10" width="10" alt="logo" id='alert-img'></Image>
            <Image src= "/image_1.png" height= "10" width="28" alt="logo" id='user-img'></Image>
        </div>
    </div>
  )
}

export default Nav