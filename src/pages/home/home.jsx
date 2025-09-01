import React, { useState } from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/sidebar' 
import Feed from '../../components/feed/feed'

const Home = ({ sideBar }) => {
  // Stato per la categoria selezionata
  const [category, setCategory] = useState(0)

  return (
    <>
      {/* Sidebar laterale */}
      <Sidebar 
        sideBar={sideBar} 
        category={category} 
        setCategory={setCategory} 
      />

      {/* Contenitore principale dei video */}
      <div className={`container ${sideBar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </>
  )
}

export default Home
