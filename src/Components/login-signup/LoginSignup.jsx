import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png'; 
import password_icon from '../Assets/password.png'; 

const LoginSignup = () => {

const[action,sectAction] = useState("Login");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
           <input type="text"placeholder="Name"/>       
      </div>}

        

      <div className="input">
          <img src={email_icon} alt="" />
           <input type="email" placeholder="Email id"/>       
      </div>

      <div className="input">
          <img src={password_icon} alt="" />
           <input type="password" placeholder="Password"/>       
      </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
       

      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{sectAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Signup"?"submit gray":"submit"} onClick={()=>{sectAction("Login")}} >Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
