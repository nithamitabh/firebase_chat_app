import React from 'react'
import Profile from '../img/profile.jpg';


const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={Profile} alt="" />
        <div className="userChatInfo">
          <span>Rehan</span>
          <p>Hello baba</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Profile} alt="" />
        <div className="userChatInfo">
          <span>Rehan</span>
          <p>Hello baba</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Profile} alt="" />
        <div className="userChatInfo">
          <span>Rehan</span>
          <p>Hello baba</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Profile} alt="" />
        <div className="userChatInfo">
          <span>Rehan</span>
          <p>Hello baba</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Profile} alt="" />
        <div className="userChatInfo">
          <span>Rehan</span>
          <p>Hello baba</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
