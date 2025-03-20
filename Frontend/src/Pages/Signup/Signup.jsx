import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form className="signup-form">
          <div>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" placeholder="Username" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" placeholder="Password" />
          </div>
          <div>
            <label for="role">Select Role:</label>
            <select id="role" name="role">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div>
            <input type="submit" value="SignUp" />
            <div>
              <p>
                Already have an account?{" "}
                <a href="/">Login</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
