import { Home } from './pages/Home'
import { Navbar } from './components/Navbar/Navbar'
import { PlayersPage } from './pages/Players'
import { PlayerProfile } from './pages/PlayerProfile'
import { ContactPage } from './pages/Contact'
import { AboutPage } from './pages/About'
import { ServicesPage } from './pages/Services'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NextUIProvider } from "@nextui-org/react";
import ScrollToTop from './utils/ScrollToTop'
import './App.css'

function App() {
  

  return (
    <>
      <NextUIProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jugadores" element={<PlayersPage />} />
            <Route path="/jugadores/:playerID/:nombre" element={<PlayerProfile />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/sobre-nosotros" element={<AboutPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </>
  )
}

export default App
