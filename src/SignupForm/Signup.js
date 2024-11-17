import React, { useState } from 'react';
import signCSS from './Signup.module.css';
import { CiLock, CiUser, CiMail } from "react-icons/ci";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up with', { name, email, password });
  };

  return (
    <div className={signCSS.wrapper}>
      <form className={signCSS.form} onSubmit={handleSignup}>
        <h2>Бүртгүүлэх</h2>
        <div className={signCSS.inputBox}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Нэр'
            required
          />
          <CiUser />
        </div>
        <div className={signCSS.inputBox}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Майл хаяг'
            required
          />
          <CiMail />
        </div>
        <div className={signCSS.inputBox}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Нууц үг'
            required
          />
          <CiLock />
        </div>
        <div className={signCSS.inputBox}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Нууц үг давтах'
            required
          />
          <CiLock />
        </div>
        <button className={signCSS.btn} type="submit">Бүртгүүлэх</button>
      </form>
    </div>
  );
}

export default Signup;
