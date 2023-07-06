import React from "react";
import "./RightBoard.css"

const LoginForm = () => {
  return (
    <div className="form-cont">
      <form className="form">
        <label htmlFor="email">Email address</label>
        <br />
        <input type="text" id="email" name="email" />
        <br />
        <label htmlFor="pass">Password</label>
        <br />
        <input type="text" id="pass" name="pass" />
        <p >Forgot password?</p>
        <button type="submit">
          <span>Sign In</span>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
