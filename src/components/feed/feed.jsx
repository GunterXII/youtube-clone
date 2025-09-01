import React, { useEffect, useState } from 'react'
import "./feed.css"
import { Link } from 'react-router-dom'
import { valueConverter } from "../../data"
import { API_KEY } from "../../../dati"
import moment from "moment";

const Feed = ({ category }) => {
  // Stato per contenere i video
  const [data, setData] = useState([])

  // Funzione per fetchare i video più popolari da YouTube
  const fetchData = async () => {
    try {
      const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IT&videoCategoryId=${category}&key=${API_KEY}`
      const response = await fetch(videoListUrl)
      const json = await response.json()
      setData(json.items || []) // fallback array vuoto se undefined
    } catch (error) {
      console.error("Errore nel fetch dei video:", error)
      setData([]) // evita crash in caso di errore
    }
  }

  // useEffect per ricaricare i video ogni volta che cambia la categoria
  useEffect(() => {
    fetchData()
  }, [category])

  return (
    <div className="feed">
      {data && data.length > 0 ? (
        data.map((video, index) => (
          <Link
            to={`video/${video.snippet.categoryId}/${video.id}`}
            className='card'
            key={index}
          >
            {/* Thumbnail con fallback */}
            <img src={video.snippet.thumbnails?.medium?.url || "fallback.jpg"} alt={video.snippet.title || "Video"} />

            {/* Titolo */}
            <h2>{video.snippet.title || "Titolo non disponibile"}</h2>

            {/* Nome canale */}
            <h3>{video.snippet.channelTitle || "Canale sconosciuto"}</h3>

            {/* Visualizzazioni e data di pubblicazione */}
            <p>
              {valueConverter(video.statistics?.viewCount || 0)} visualizzazioni &bull; {video.snippet.publishedAt ? moment(video.snippet.publishedAt).fromNow() : ""}
            </p>
          </Link>
        ))
      ) : (
        <p>Caricamento in corso o nessun video disponibile...</p>
      )}
    </div>
  )
}

export default Feed
