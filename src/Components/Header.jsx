import rotas from "../Rutas/rotas.jsx";
import "../Styles/style.css";
import { Link } from "react-router-dom";
import {useEffect } from "react";
import { motion } from "motion/react";

export default function Header() {

  return (
    <motion.div
      id="header"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
    >
      {rotas.map((rt) => {
      /* alert(window.location.pathname === rt.pathname)
      alert(window.location.pathname === rt.pathname ? "gray" : "black") */
        return rt.name !== "DetalhesProjeto" ? (
          <Link  key={rt.id}
            to={rt.path}
            style={{color:
              (window.location.pathname == rt.path ?
               "var(--verdesito)" : "var(--verde_leve)") }}
            >
            {window.location.pathname == rt.path ? ("🟢 " + rt.name) :rt.name }
          </Link>
        ) : null
      })}
      {window.location.pathname == rotas[2].path && <Link  key={rotas[2].id}
            to={rotas[2].path}
            style={{color:"var(--verdesito)" }}
            >
            {rotas[2].name}
          </Link>}
    </motion.div>
  );
}
