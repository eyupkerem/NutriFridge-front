import React, { useState } from 'react'
import "../components/LoginPart.css"
import logo from "../asset/logo.png"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebaseConfig'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'

const LoginPart = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin=async(e)=>{
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email,password);
      toast.success("Başarıyla giriş yapıldı");
      console.log("Başarılı");
      setTimeout(() => {
        window.location.href = "/";
        
      }, 2000);

    } catch (error) {
      toast.error("Giriş bilgileriniz hatalı. Lütfen tekrar deneyiniz");
      console.log(error.message);
    }
  }

  return (
    <div className="login-container">
      <div className='login-logo'>
        <img src={logo} alt="Logo" className='logoleft' />
      </div> 

      <div className="login-inputareas">
        <div className='login-form'>
          <form onSubmit={handleLogin}>
            <label> 
              E-mail 
              <input 
                type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </label>
            <label>
              Password
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </label>
            <button type="submit" className='loginbtn'>Login</button>
          </form>
          <p>Forgot Password? Please contact us.</p>
          <p className='SignUp'>Don't have an account? Please contact us.</p>
        </div>
      </div>
    </div>
  );
};





export default LoginPart