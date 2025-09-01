import React, { useState, useEffect } from 'react'
import "./recommended.css"
import { Link } from 'react-router-dom'
import { valueConverter } from '../../data'
import { API_KEY } from "../../../dati"

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([])

  // Fetch video consigliati/popolari per categoria
  const fetchData = async () => {
    const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IT&videoCategoryId=${categoryId}&key=${API_KEY}`
    const res = await fetch(relatedVideoUrl)
    const data = await res.json()
    setApiData(data.items || [])
  }

  useEffect(() => {
    fetchData()
  }, [categoryId]) // aggiunto categoryId come dipendenza

  return (
    <div className='recommended'>
      {apiData.length > 0
        ? apiData.map((item, index) => (
            <Link 
              to={`/video/${item.snippet.categoryId}/${item.id}`} 
              className="side-video-list" 
              key={index}
            >
              <img src={item.snippet.thumbnails?.medium?.url || ""} alt={item.snippet.title || "Video consigliato"} />
              <div className="vid-info">
                <h4>{item.snippet.title || "Titolo non disponibile"}</h4>
                <p>{item.snippet.channelTitle || "Canale sconosciuto"}</p>
                <p>{valueConverter(item.statistics?.viewCount || 0)} visualizzazioni</p>
              </div>
            </Link>
          ))
        : <p>Nessun video consigliato disponibile</p>
      }
    </div>
  )
}

export default Recommended
