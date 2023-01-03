import React from 'react'
import Add from "../img/addAvatar.png";

const Register = () => {
  const handleSumbit = (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirm_password = e.target[2].value;
    const file = e.target[4].value;
    
  }
  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
            <h2>Register in Pyarre Batte</h2>
            <form onSubmit={handleSumbit}>
                <input type="text" placeholder='Enter Username' />
                <input type="email"  placeholder='Enter Email'/>
                <input type="password" placeholder='password' />
                <input type="password" placeholder='confirm password' />
                <input style={{display:"none"}} type="file" id='fi'/>
                <label htmlFor="fi">
                    <img src={Add} alt="" />
                    <span>Add an Avtar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You have an account</p>

        </div>
      </div>
    </div>
  )
}

export default Register
