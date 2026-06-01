import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CardProjeto({ projeto }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Link to={`/projeto/${projeto.slug}`} className="block h-full">
        <div className="card h-full flex flex-col overflow-hidden cursor-pointer group">
          {/* Imagem */}
          <div className="relative overflow-hidden h-48 bg-gradient-to-br from-indigo-400 to-pink-400">
            <img
              src={projeto.img }
              alt={projeto.nome}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 flex flex-col p-6">
            {/* Título */}
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition">
              {projeto.nome}
            </h3>

            {/* Descrição */}
            <p className="text-gray-600 text-sm mb-4 flex-1">
              {projeto.descricao}
            </p>

            {/* Tecnologias */}
            <div className="flex flex-wrap gap-2 mb-4">
                <span
                  key={0}
                  className="skill-tag text-xs"
                >
                  {projeto.linguages}
                </span>
            </div>

            {/* Botão */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary w-full"
            >
              Ver Detalhes →
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
