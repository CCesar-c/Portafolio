import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import projetos from '../api/projectos.json'

export default function DetalheProjeto() {
  const { slug } = useParams();
  const projeto = projetos.find((p) => p.slug === slug);

  if (!projeto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Projeto não encontrado</h1>
          <Link to="/projetos" className="btn btn-primary">
            Voltar aos Projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col " >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 overflow-hidden"
      >
        <img
          src={projeto.img}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center text-white"
          >
          </motion.div>
        </div>
      </motion.section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div  className="container mx-auto px-4 max-w-4xl ">
          {/* Objetivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mb-12 p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-600"
            style={{ gap:10 }}
            >
            <h2 className="text-2xl max-w-4xl font-bold text-indigo-600 mb-3">🎯 Objetivo do Projeto</h2>
            <p className="text-gray-700 text-lg">{projeto.descricao}</p>
          </motion.div>

          {/* Aprendizados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-102 p-6 bg-green-50 rounded-lg border-l-4 border-green-500"
          >
            <h2 className="text-2xl max-w-4xl font-bold text-green-700 mb-3">📚 Aprendizados Obtidos</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{projeto.linguages}</p>
          </motion.div>

          {/* Tecnologias */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🛠️ Tecnologias Utilizadas</h2>
            <div className="flex flex-wrap gap-3">

              <motion.span
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="skill-tag cursor-pointer"
              >
                {projeto.linguages}
              </motion.span>
            </div>
          </motion.div>

          {/* Links de Acesso */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🔗 Links de Acesso Técnico</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <motion.a
                onClick={() => { window.location.href = projeto.repositorio }}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary flex-1 text-center"
              >
                💻 Repositório GitHub
              </motion.a>
            </div>
          </motion.div>

          {/* Botão Voltar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <Link to="/projetos" className="btn btn-outline">
              ← Voltar aos Projetos
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
