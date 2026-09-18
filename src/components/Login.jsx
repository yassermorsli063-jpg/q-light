import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Welcome to Q LIGHT");
  };

  return (
    <main className="login-page">

      <div className="login-box">

       
        <Link to="/" className="login-logo-link">
          <div className="login-logo">
            Q
          </div>
        </Link>

        <h1>Q LIGHT</h1>

        <p className="login-subtitle">
          Welcome back to luxury lighting
        </p>

        <form onSubmit={handleSubmit}>

         
          <div className="input-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />

          </div>

          
          <div className="input-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-wrapper">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />

              <button
                type="button"
                className="show-password"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>

       
          <div className="login-options">

            <label className="remember">

              <input
                type="checkbox"
              />

              <span>
                Remember me
              </span>

            </label>

            <button
              type="button"
              className="forgot"
            >
              Forgot password?
            </button>

          </div>

          
          <button
            type="submit"
            className="login-button"
          >
            LOGIN
          </button>

        </form>

        
        <div className="divider">
          <span>OR</span>
        </div>

        
        <div className="register-text">

          <span>
            Don't have an account?
          </span>

          <button
            type="button"
            className="register-button"
          >
            Create Account
          </button>

        </div>

      </div>

    </main>
  );
}

export default Login;
