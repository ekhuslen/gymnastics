import React, { useState } from 'react';
import loginCSS from './Login.module.css'
import { CiLock, CiUser } from "react-icons/ci";

function Login({onSignupClick}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', { email, password });
  };

  return (
    <div className = {loginCSS.wrapper}> 
      <form className={loginCSS.form} onSubmit={handleLogin} >
      <h2 >Нэвтрэх</h2>
        <div className={loginCSS.inputBox}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Майл хаяг'
            required
          />
          <CiUser />
        </div>
        <div className={loginCSS.inputBox}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Нууц үг'
            required
          />
          <CiLock />
        </div>
        <div className={loginCSS.rememberForgot}>
            <label>
                <input type='checkbox'/>Нэвтрэх нэр хадгалах
            </label>
        </div>
        <button className={loginCSS.btn} type="submit" >Login</button>
        <div>
            <p>Бүртгүүлэх бол <a href='#' onClick={onSignupClick}>энд</a> дарна уу!</p>
        </div>
      </form>
    </div>
  );
}


export default Login;
