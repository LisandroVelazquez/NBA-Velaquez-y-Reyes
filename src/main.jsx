import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Equipo from './Equipo.jsx'
import Buscar from './Buscar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Buscar />} >
        <Route path="inicio/:id" element={<Equipo />} />
      </ Route>
    </Routes>
  </BrowserRouter>,
)
