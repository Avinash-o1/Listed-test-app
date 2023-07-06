import React from 'react'
import PieChart from './PieChart'
import Image from 'next/image'

const PieComp = () => {
  return (
    <div className='low-card-comp '>
      <div className='heading'>
        <p>Top products</p><span>May - June 2021<Image src="/Vector_vertical.svg" width="8" height="8" alt="dropdown" className='dropdown'/></span>
      </div>
      <div className='flex justify-around mt-3'>
        <div><PieChart/></div>
        <div className='pie-list'>
          <div><span className='dot a'/><span className='pie-list-text'>Basic Tees</span><p className='pie-list-percentage'>55%</p></div>
          <div><span className='dot b'/><span className='pie-list-text'>Custom Short Pants</span><p className='pie-list-percentage'>31%</p></div>
          <div><span className='dot c'/><span className='pie-list-text'>Super Hoodies</span><p className='pie-list-percentage'>14%</p></div>
        </div>
      </div>
    </div>
  )
}

export default PieComp