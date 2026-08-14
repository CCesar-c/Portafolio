import rotas from "../Rutas/rotas.jsx";
import "../Styles/style.css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.div
      id="header"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      }}
    >
      {rotas.map((rt) => {
        return rt.name !== "detalhesProjeto" ? (
          <Link key={rt.id} to={rt.path}>
            {rt.name}
          </Link>
        ) : null;
      })}
    </motion.div>
  );
}
