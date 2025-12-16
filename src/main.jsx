import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Equipo from './Equipo.jsx'
import Buscar from './Buscar.jsx'
import Inicio from './inicio.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="buscar" element={<Buscar />} > 
        <Route path=":id" element={<Equipo />} />
      </ Route>
    </Routes>
  </BrowserRouter>
)
