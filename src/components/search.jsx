import React from 'react'
import Profile from '../img/profile.jpg';

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find friends ..' />
      </div>
      <div className="userChat">
        <img src={Profile} alt="" />
        <div className="userChatInfo">
          <span>Rehan</span>
        </div>
      </div>
    </div>
  )
}

export default Search
