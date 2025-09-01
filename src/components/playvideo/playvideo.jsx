import React, { useEffect, useState } from 'react'
import "./playvideo.css"
import userIcon from '../../assets/88e8965c-4a56-4215-bbb2-7785adab7027.jpeg'
import { API_KEY } from "../../../dati"
import { valueConverter } from '../../data'
import moment from 'moment'
// Icone da react-icons
import { FaThumbsUp, FaThumbsDown, FaShare, FaRegBookmark } from "react-icons/fa"
import { useParams } from 'react-router-dom'

const Playvideo = () => {
  const { videoId } = useParams()
  const [apiData, setApiData] = useState(null)
  const [channelData, setChannelData] = useState(null)
  const [comments, setComments] = useState([])

  // Fetch informazioni canale e commenti
  const fetchOtherData = async () => {
    if (!apiData) return

    const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    const res = await fetch(channelDataUrl)
    const data = await res.json()
    setChannelData(data.items?.[0] || null)

    const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
    const commentRes = await fetch(commentUrl)
    const commentData = await commentRes.json()
    setComments(commentData.items || [])
  }

  // Fetch informazioni video
  const fetchVideoData = async () => {
    const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    const res = await fetch(videoDetailsUrl)
    const data = await res.json()
    if (data.items && data.items.length > 0) {
      setApiData(data.items[0])
    } else {
      console.error("Dati video non trovati:", data)
      setApiData(null)
    }
  }

  // Quando i dati del video cambiano, fetch canale e commenti
  useEffect(() => {
    if (apiData) fetchOtherData()
  }, [apiData])

  useEffect(() => {
    fetchVideoData()
  }, [videoId])

  return (
    <div className='play-video'> 
      {/* Video YouTube embed */}
      <iframe 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        title={apiData?.snippet?.title || "Video YouTube"}
      ></iframe>  

      {/* Titolo video */}
      <h3>{apiData?.snippet?.title || "Titolo non disponibile"}</h3>
      
      {/* Info video: views, like, share */}
      <div className="play-video-info">
        <p>
          {valueConverter(apiData?.statistics?.viewCount || 0)} visualizzazioni &bull; 
          {apiData?.snippet?.publishedAt ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span><FaThumbsUp /> {valueConverter(apiData?.statistics?.likeCount || 0)}</span>
          <span><FaThumbsDown /></span>
          <span><FaShare /> Condividi</span>
          <span><FaRegBookmark /> Salva</span>
        </div>
      </div>

      <hr />

      {/* Info canale */}
      <div className="publisher">
        <img src={channelData?.snippet?.thumbnails?.default?.url || userIcon} alt="Avatar canale" width="50px"/>
        <div>
          <p>{apiData?.snippet?.channelTitle || "Canale sconosciuto"}</p>
          <span>{channelData ? valueConverter(channelData.statistics.subscriberCount) + " iscritti" : "100k iscritti"}</span>
        </div>
        <button>Iscriviti</button>
      </div>

      {/* Descrizione video */}
      <div className="vid-description">
        {apiData ? apiData.snippet.description.slice(0,250) + "..." : "Descrizione non disponibile"}
        <hr />
        <h4>{valueConverter(apiData?.statistics?.commentCount || 0)} commenti</h4>

        {/* Commenti */}
        {comments && comments.length > 0
          ? comments.map((comment, index) => (
              <div key={index} className="comment">
                <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || userIcon} alt="Avatar utente" />
                <div>
                  <h3>
                    {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName || "Utente sconosciuto"}
                    <span>{comment?.snippet?.topLevelComment?.snippet?.publishedAt ? moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow() : ""}</span>
                  </h3>
                  <p>{comment?.snippet?.topLevelComment?.snippet?.textDisplay || ""}</p>
                </div>
              </div>
            ))
          : <p>Nessun commento disponibile</p>
        }
      </div>
    </div>
  )
}

export default Playvideo
