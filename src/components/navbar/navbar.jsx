import React from 'react'
import "./navbar.css"
import menu from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import searchIcon from "../../assets/search.png"
import upload from "../../assets/upload.png"
import moreIcon from "../../assets/more.png"
import notificationIcon from "../../assets/notification.png"
import userIcon from "../../assets/88e8965c-4a56-4215-bbb2-7785adab7027.jpeg"
import { Link } from 'react-router-dom'

const Navbar = ({ setSideBar }) => {
  return (
    <nav className='flex-div'>
      {/* Lato sinistro: menu e logo */}
      <div className="nav-left flex-div">
        <img 
          src={menu} 
          alt="icona-menu" 
          className='menu-icon' 
          onClick={() => setSideBar(prev => !prev)}
        />
        <Link to="/"><img src={logo} alt="logo-YouTube" className='logo'/></Link>
      </div>

      {/* Centro: barra di ricerca */}
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
            <input type="text" placeholder='Cerca' />
            <img src={searchIcon} alt="icona-cerca" />
        </div>
      </div>

      {/* Lato destro: icone azioni e avatar utente */}
      <div className="nav-right flex-div">
        <img src={upload} alt="Carica video" />
        <img src={moreIcon} alt="Altro" />
        <img src={notificationIcon} alt="Notifiche" id="not"/>
        <img src={userIcon} alt="Profilo utente" className='user-icon'/>
      </div>
    </nav>
  )
}

export default Navbar
