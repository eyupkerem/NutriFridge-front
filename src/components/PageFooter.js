import React from 'react'
import "./PageFooter.css"
import logo from "../asset/logo.png"

const PageFooter = () => {
  return (
    <footer className="footer">
    <div className="kolon1">
      <div className="logo">
        <span className="brand-name">Nutrifridge</span>
        <img src={logo} alt="logo" className='logo' />
      </div>
    </div>
    <div className="kolon2">
      <h4>Kurumsal</h4>
      <ul>
        <li><button>Biz Kimiz ? </button></li>
        <li><button>İletişime Geç</button></li>
        <li><button>İş Ortaklarımz</button></li>
      </ul>
    </div>
    <div className="kolon3">
      <h4>Sosyal Media</h4>
      <ul>
        <li><button>Instagram</button></li>
        <li><button>Facebook</button></li>
        <li><button>YouTube</button></li>
      </ul>
    </div>
    <div className="kolon4">
      <h4>Yardım </h4>
      <p>0554 554 5454 </p>
      <button>WhatsApp</button>
    </div>
  </footer>
  )
}

export default PageFooter