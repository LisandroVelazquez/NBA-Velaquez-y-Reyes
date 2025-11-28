import './App.css';
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from 'react-router-dom';

export default function Jugadores() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { equipo } = useOutletContext();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://api.balldontlie.io/v1/players?team_ids[]=${equipo}`,
      {
        headers: {
          Authorization: "Bearer d85d9ecb-9902-4eea-9d8b-2c15af5668dc"
        }
      }
    )
    .then(res => res.json())
    .then(data => {
      setPlayers(data.data)
      setLoading(false)
      }
      )
      
}, [id]);



  if (loading) return <p>Cargando...</p>;

  return (
    <div className="jugadores-app">
  <div className="jugadores-header">
    <h1>Jugadores NBA que coinciden</h1>
  </div>

  <div className="jugadores-grid">
  {players?.map(p => (
    <div key={p.id} className="player-card">
      <div className="player-name">{p.first_name} {p.last_name}</div>
      <div className="player-meta">
        <span className="badge">{p.position || 'N/A'}</span>
        <span>{p.team?.full_name || "Sin equipo"}</span>
      </div>
    </div>
  ))}
</div>
</div>

);
}
