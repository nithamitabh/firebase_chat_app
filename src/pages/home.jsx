import React from 'react'
import Slidebar from '../components/slidebar'
import Chat from '../components/chat'


const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Slidebar/>
        <Chat/>

      </div>
    </div>
  )
}

export default Home
