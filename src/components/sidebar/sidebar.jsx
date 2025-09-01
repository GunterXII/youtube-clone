import React from 'react'
import "./sidebar.css"

// Icone
import home from "../../assets/home.png"
import game_icon from "../../assets/game_icon.png"
import automobiles from "../../assets/automobiles.png"
import sport from "../../assets/sports.png"
import entertainment from "../../assets/entertainment.png"
import tech from "../../assets/tech.png"
import music from "../../assets/music.png" 
import blog from "../../assets/blogs.png"
import news from "../../assets/news.png"

// Avatar iscritti
import userIcon from "../../assets/88e8965c-4a56-4215-bbb2-7785adab7027.jpeg"
import simon from "../../assets/simon.png"
import tom from "../../assets/tom.png"
import megan from "../../assets/megan.png"
import cameron from "../../assets/cameron.png"

const Sidebar = ({ sideBar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sideBar ? "" : "small-sidebar"}`}>
      {/* Link principali categorie */}
      <div className="shortcut-links">
        <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
          <img src={home} alt="home" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
          <img src={game_icon} alt="giochi" />
          <p>Giochi</p>
        </div>
        <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
          <img src={automobiles} alt="auto" />
          <p>Auto</p>
        </div>
        <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
          <img src={sport} alt="sport" />
          <p>Sport</p>
        </div>
        <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
          <img src={entertainment} alt="intrattenimento" />
          <p>Intrattenimento</p>
        </div>
        <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
          <img src={tech} alt="tecnologia" />
          <p>Tecnologia</p>
        </div>
        <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
          <img src={music} alt="musica" />
          <p>Musica</p>
        </div>
        <div className={`side-link ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
          <img src={blog} alt="blog" />
          <p>Blog</p>
        </div>
        <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
          <img src={news} alt="notizie" />
          <p>Notizie</p>
        </div>
        <hr />
      </div>

      {/* Lista iscritti */}
      <div className="subscribed-list">
        <h3>Iscrizioni</h3>
        {[userIcon, simon, tom, megan, cameron].map((img, idx) => (
          <div className="side-link" key={idx}>
            <img src={img} alt="avatar" />
            <p>{["L","Simon","Tom","Megan","Cameron"][idx]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
