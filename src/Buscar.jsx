import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Buscar() {
    const [equipo, setEquipo] = useState("1");
    const navigate = useNavigate();

    const cambioEquipo = (e) => {
        setEquipo(e.target.value);
    }

    const rut = () => {
        navigate(`inicio/${equipo}`);
    }

    return (
        <>
            <div>
                <h1>Selecciona un equipo aqui</h1>
                <select name="Equipos" id="teams" value={equipo} onChange={cambioEquipo}>
                    <option value="1">Atlanta Hawks</option>
                    <option value="2">Boston Celtics</option>
                    <option value="3">Brooklyn Nets</option>
                    <option value="4">Charlotte Hornets</option>
                    <option value="5">Chicago Bulls</option>
                    <option value="6">Cleveland Cavaliers</option>
                    <option value="7">Dallas Mavericks</option>
                    <option value="8">Denver Nuggets</option>
                    <option value="9">Detroit Pistons</option>
                    <option value="10">Golden State Warriors</option>
                    <option value="11">Houston Rockets</option>
                    <option value="12">Indiana Pacers</option>
                    <option value="13">LA Clippers</option>
                    <option value="14">LA Lakers</option>
                    <option value="15">Memphis Grizzlies</option>
                    <option value="16">Miami Heat</option>
                    <option value="17">Milwaukee Bucks</option>
                    <option value="18">Minnesota Timberwolves</option>
                    <option value="19">New Orleans Pelicans</option>
                    <option value="20">New York Knicks</option>
                    <option value="21">Oklahoma City Thunder</option>
                    <option value="22">Orlando Magic</option>
                    <option value="23">Philadelphia 76ers</option>
                    <option value="24">Phoenix Suns</option>
                    <option value="25">Portland Trail Blazers</option>
                    <option value="26">Sacramento Kings</option>
                    <option value="27">San Antonio Spurs</option>
                    <option value="28">Toronto Raptors</option>
                    <option value="29">Utah Jazz</option>
                    <option value="30">Washington Wizards</option>

                </select>
            </div>


            <button onClick={rut}>Buscar</button>

            <Outlet context={{equipo}}/>
        </>
    );
}