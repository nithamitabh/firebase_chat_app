import React from 'react'
import Img from '../img/img.png';
import Attach from '../img/attach.png'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something ...' />
      <div className="send">
        <img src="" alt="" />
        <input type="file" style={{display:"none"}} id= "file1" />
        <label htmlFor="file1"><img src={Img} alt="" /></label>
        <input type="file" style={{display:"none"}} id= "file2" />
        <label htmlFor="file2"><img src={Attach} alt="" /></label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
