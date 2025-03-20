import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div>
            <div className="login-container">
                <h1>Login</h1>
                <form className="login-form">
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input id="username" type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" />
                    </div>
                    <div>
                        <input type="submit" value="Student Login" />
                        <div>
                            <p>
                                Are you an admin?{" "}
                                <a href="/admin">Admin Login</a>
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
    );
};

export default Login;
