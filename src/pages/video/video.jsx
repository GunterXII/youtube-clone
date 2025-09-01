import React from 'react'
import "./video.css"
import Playvideo from '../../components/playvideo/playvideo'
import Recommended from './../../components/recommended/recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
  // Prendiamo l'ID del video e la categoria dai parametri URL
  const { videoId, categoryId } = useParams()

  return (
    <div className='play-container'>
      {/* Video principale */}
      <Playvideo videoId={videoId} />

      {/* Video consigliati a lato */}
      <Recommended categoryId={categoryId} />
    </div>
  )
}

export default Video
