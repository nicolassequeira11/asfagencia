import { Home } from './pages/Home'
import { Navbar } from './components/Navbar/Navbar'
import { PlayersPage } from './pages/Players'
import { PlayerProfile } from './pages/PlayerProfile'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jugadores" element={<PlayersPage />} />
          <Route path="/jugadores/:playerID/:nombre" element={<PlayerProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
