import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
            <h2>Login in Pyaree Batte</h2>
            <form>
                <input type="email"  placeholder='Enter Email'/>
                <input type="password" placeholder='password' />
                <button>Sign In</button>
            </form>
            <p>You don't have an account? Register</p>

        </div>
      </div>
    </div>
  )
}

export default Login
