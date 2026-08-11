import rotas from "../Rutas/rotas.jsx";
import "../Styles/style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      {rotas.map((rt) => {
        return <Link key={rt.id} to={rt.path}>{rt.name}</Link>
      })}
    </div>
  );
}
