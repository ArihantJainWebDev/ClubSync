import React from 'react'
import './Admin.css'

const Admin = () => {
  return (
    <div>
      <div className='admin-container'>
        <div>
          <h1>Welcome to the Admin Panel!</h1>
        </div>
        <form className="admin-form">
          <div>
            <label>
              Admin ID:
              <input type="text" name="username" />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
          </div>
          <div>
            <input type="submit" value="Admin Login" />
            <div>
              <p>
                Are you a Student?{" "}
                <a href="/">Student Login</a>
              </p>
            </div>
            <div>
              <p>
                Not an existing user?{" "}
                <a href="/signup">SignUp</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Admin
