import React from 'react'
import { Activities, Leftboard, Nav, PieComp, Schedules, TotalCards } from '@/Component/dashboard'

const page = () => {
    
  return (
    <div className='dashboard'>
        <Leftboard />
        <div className='right-side'>
            <Nav/>
            <TotalCards/>
            <Activities/>
            <div className='flex justify-between'>
              <PieComp/>
              <Schedules/>
            </div>
        </div>
    </div>
  )
}

export default page