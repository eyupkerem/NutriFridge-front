import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignupBox.css';

function SignUpBox() {
  return (
    <div className="signup-box">
        <div className='links'>
      <h2>Hala bir hesabınız yok mu ?</h2>
      <button className="signup-button">
        <NavLink to="/signup">Kayıt Ol</NavLink>
      </button>
      <p className="small-text">
        Hesabınız var mı ?
        <NavLink to="/login">Giriş yap</NavLink>
      </p>
        </div>
    </div>
  );
}

export default SignUpBox;   