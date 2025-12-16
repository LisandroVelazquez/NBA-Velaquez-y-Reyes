import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import "./App.css";

export default function Jugadores() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { equipo, mostrar } = useOutletContext() || {};
  const { id } = useParams();

  const API_KEY = "d85d9ecb-9902-4eea-9d8b-2c15af5668dc";

  useEffect(() => {
    const teamId = equipo || id;
    if (!teamId) {
      setPlayers([]);
      setLoading(false);
      return;
    }

    const fetchPlayers = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.balldontlie.io/v1/players?team_ids[]=${teamId}&per_page=100`,
          {
            headers: {
              Authorization: API_KEY
            }
          }
        );

        const text = await res.text();
        const data = JSON.parse(text);

        setPlayers(data.data || []);
      } catch (err) {
        console.error("Error fetching players:", err);
        setPlayers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, [equipo, id]);

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="jugadores-app">
      <div className="jugadores-header">
        <h1>Jugadores de {mostrar || "equipo"}</h1>
      </div>

      <div className="jugadores-grid">
        {players.map((p) => (
          <div key={p.id} className="player-card">
            <div className="player-name">
              {p.first_name} {p.last_name}
            </div>

            <div className="player-name">
              {p.position
                ? p.position === "G"
                  ? "Base"
                  : p.position === "F"
                  ? "Alero / Ala"
                  : p.position === "C"
                  ? "Pivot"
                  : p.position
                : "N/A"}
            </div>

            <div className="player-name">
              Altura: {p.height || "N/A"}
            </div>

            <div className="player-name">
              Peso: {p.weight ? `${p.weight} lbs` : "N/A"}
            </div>

            <div className="player-name">
              Equipo: {p.team?.full_name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
