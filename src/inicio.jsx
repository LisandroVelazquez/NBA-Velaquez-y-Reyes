import { useNavigate } from "react-router-dom";

export default function Inicio() {
    const navigate = useNavigate();

    const SearchTeam = () => {
        navigate("buscar");
        console.log("anda");
    };

    return (
        <>
            <h1>PlayerSearchBasquet</h1>
            <h2 style={{textAlign:"center"}}>Buscar Jugador</h2>
            <button onClick={SearchTeam}>Por equipo</button>
            <button>Por nombre</button>
            <button></button>
        </>
    );
}
