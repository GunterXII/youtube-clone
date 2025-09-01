import React,{useState} from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Video from './pages/video/video'

const App = () => {
  const [sideBar,setSideBar] = useState(true)
  return (
    <div>
      <Navbar setSideBar={setSideBar}></Navbar>
      <Routes>
        <Route path='/' element={<Home sideBar={sideBar}></Home>}> </Route>
        <Route path='/video/:categoryId/:videoId' element={<Video></Video>}> </Route>
      </Routes>
    </div>
  )
}

export default App
