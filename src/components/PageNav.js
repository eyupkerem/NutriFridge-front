import React from 'react'
import { NavLink } from 'react-router-dom'
import "./PageNav.css"
import logo from "../asset/logo.png"

const PageNav = () => {
    return (
        <nav className="navbar">
          <div className="left-section">
            <img src={logo} alt="" className='logo' />
            <NavLink to="/" className="brand-name " >NutriFridge</NavLink>
          </div>
          <div className="center-section">
            <NavLink to="/Fridge" activeClassName="active-link">Buzdolabı</NavLink>
            <NavLink to="/Fridge" activeClassName="active-link">Alışveriş Listesi</NavLink>
            <NavLink to="/findRecipe" activeClassName="active-link">Tarif Bul</NavLink>
          </div>
          <div className="right-section">
          <NavLink to="/signup" activeClassName="active-link" className="signup">Kayıt Ol</NavLink>
          <NavLink to="/login" activeClassName="active-link" className="login">Giriş yap</NavLink>
          </div>
        </nav>
      );
}

export default PageNav