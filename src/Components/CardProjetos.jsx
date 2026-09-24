import { motion } from "motion/react"
import { Link } from "react-router-dom"
export default function CardProjetos({ id, nome, descricao, img = null }) {
  return (
    <motion.div className="cardprojetos"
      initial={{ opacity: 0, y: -100, transition: { duration: 0.75 } }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
    >
      <img src={img != null ? img : "src/Public/images.png"} />
      <h5>id: {id}</h5>
      <h5>nome: {nome}</h5>
      <h5>descricao: {descricao}</h5>
      <Link className="btn" to={`/detalhesProjeto/${id}`}>Ver detalhes</Link>
    </motion.div>
  )
}
