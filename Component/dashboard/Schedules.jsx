import Image from 'next/image'
import React from 'react'

const Schedules = () => {
  return (
    <div className='low-card-comp'>
      <div className='heading'>
        <p>Today’s schedule</p><span>See All<Image src="/Vector_horizontal.svg" width="5" height="5" alt="dropdown" className='dropdown'/></span>
      </div>
      <div className='flex schedule-task'>
        <div className='list-line teal'></div>
        <div className='schedule-text'>
          <p className='schedule-head'>Meeting with suppliers from Kuta Bali</p>
          <p className='schedule-desc'>14.00-15.00<br/>at Sunset Road, Kuta, Bali </p>
        </div>
      </div>
      <div className='flex schedule-task '>
        <div className='list-line sky'></div>
        <div className='schedule-text'>
          <p className='schedule-head'>Check operation at Giga Factory 1</p>
          <p className='schedule-desc'>14.00-15.00<br/>at Sunset Road, Kuta, Bali </p>
        </div>
      </div>
    </div>
  )
}

export default Schedules