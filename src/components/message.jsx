import React from 'react'
import Profie from '../img/profile.jpg'

const Message = () => {
  return (
    <div className='me owner'>
      <div className="messageInfo">
        <img src={Profie} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello bhai</p>
        <img src="https://images.pexels.com/photos/3780014/pexels-photo-3780014.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div>
  )
}

export default Message
