import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';

export default function Buscar() {
    const [equipo, setEquipo] = useState("1");
    const [text, setText] = useState("Atlanta Hawks");
    const [mostrar, setMostrar] = useState("Atlanta Hawks");
    const [teams, setTeams] = useState([]);
    const [conference, setConference] = useState("East");

    const navigate = useNavigate();

    // Cargar equipos (v1 NO usa token)
useEffect(() => {
    fetch("https://api.balldontlie.io/v1/teams", {
        headers: {
            Authorization: "d85d9ecb-9902-4eea-9d8b-2c15af5668dc"
        }
    })
    .then(async res => {
        const text = await res.text();
        if (!res.ok) throw new Error(text);
        return JSON.parse(text);
    })
    .then(data => setTeams(data.data))
    .catch(err => console.error("Error cargando equipos:", err));
}, []);



    const cambioEquipo = (e) => {
        setEquipo(e.target.value);
        setText(e.target.options[e.target.selectedIndex].text);
    };

    const rut = () => {
        setMostrar(text);
        navigate(`${equipo}`);
    };

    const cambioConf = (e) => {
        setConference(e.target.value);
    };

    return (
        <><center>
            
        </center>
            <div>
                <h1>Selecciona un equipo y una conferencia aquí</h1>

                <div className="conference">
                    <span>
                        Este 
                        <input
                            type="radio"
                            name="conf"
                            value="East"
                            checked={conference === "East"}
                            onChange={cambioConf}
                        />
                    </span>

                    <span>
                        Oeste 
                        <input
                            type="radio"
                            name="conf"
                            value="West"
                            checked={conference === "West"}
                            onChange={cambioConf}
                        />
                    </span>
                </div>

                <select
                    name="Equipos"
                    id="teams"
                    value={equipo}
                    onChange={cambioEquipo}
                >
                    {teams
                        .filter(t => t.conference === conference)
                        .map(t => (
                            <option key={t.id} value={t.id}>
                                {t.full_name}
                            </option>
                        ))}
                </select>
            </div>

            <button onClick={rut}>Buscar</button>

            <Outlet context={{ equipo, mostrar }} />
        </>
    );
}
