import Image from 'next/image'
import React from 'react'

const TotalCards = () => {
  return (
    <div className='cards'>
      <div className='card green'>
        <Image src="/Revenue.svg" width="26" height= "24" alt='logo' className='icons' />
        <h6>Total Revenue</h6>
        <h3>$2,129,430</h3>
      </div>
      <div className='card yellow'>
        <Image src="/transaction_icon.svg" width="26" height= "24" alt='logo' className='icons' />
        <h6>Total Transactions</h6>
        <h3>1,520</h3>
      </div>
      <div className='card red'>
        <Image src="/likes.svg" width="26" height= "24" alt='logo' className='icons' />
        <h6>Total Likes</h6>
        <h3>9,721</h3>
      </div>
      <div className='card blue'>
        <Image src="/users.svg" width="26" height= "24" alt='logo' className='icons' />
        <h6>Total Users</h6>
        <h3>892</h3>
      </div>
    </div>
  )
}

export default TotalCards