import React from 'react'
import LeftCompList from './LeftCompList'
import "./dashboard.css"

const leftboard = () => {
    let arr = [
        ["/dashboard_icon.svg", "Dashboard"],
        ["/transaction_icon.svg", "Transactions"],
        ["/schedule_icon.svg", "Schedules"],
        ["/user_icon.svg", "Users"],
        ["setting_icon.svg", "Settings"],
    ]
  return (
    <div>
        <div className='left-side'>
            <h2>Board.</h2>
            <div>
                {
                    arr.map((array, i)=> <LeftCompList logo = {array[0]} text = {array[1]} index = {i}/>)
                }
            </div>
            <div>
                <h4>Help</h4>
                <h5>Contact Us</h5>
            </div>
        </div>
    </div>
  )
}

export default leftboard