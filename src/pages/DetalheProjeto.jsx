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
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 overflow-hidden"
      >
        <img
          src={projeto.imagem || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAAyMjL8/PzZ2dlycnLv7+8dHR3y8vKmpqbn5+evr6+Pj49JSUnLy8vV1dU5OTnAwMCfn59AQEBWVlb39/dNTU1gYGCIiIi6urpoaGgvLy+bm5skJCQQEBAaGhqAgIDGxsbg4OB3d3cLCwtbW1te4uv8AAAEZ0lEQVR4nO3b63aiMBQFYI4oglZQKRe5qHXs+7/i5CTh2iKznEq0a39/VEhptoZcEC0LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACaWxYvuhsiLifLzpbWpiLOoer6L31mSHmy1wYljjx//xFlTJg5aB9u+OQ+q/D/JadZ5HSxJKZpt4lVQPV9T5XiQG1ZEb/y4Ido3ZfzuwQ6PjDBiRtv2ywvX5z3JqamvtRMv/lQvRO23cRyHXG7NG1oJr6u6jK930fUzKcXDx+OTDOklzIg+V9y6RK10fa2E01TNdK1qa69SXaKVkLK6jK//kA/miqLLyDKlm1BUN1fnV1q3U4do0bSzdf15nFWJdkLaVWV89Ye5Kzck+vM2optwXTdOp/5ExMc5j+m9KfHRKdEkPJW0dHUZTnio36Qg3KSPjXFDN2FR9RHcvWzUpxlSyNt1f9gktI6yRJMwFyfsWZfho3jNwUzqJnxres2jTjgn8rgD0p9tK+GJwk7CkltjYNUJ960u2KDRhKnsUDbVoHIj4ZLfiJnVTigebNdxXdcxNySOJYxmtLFkbedy882EXKzoJbQWp+VyeQqnifONsYS+6gbFp6P6iputlE9auvQSysGmN6+Y0lhCMVDIxhpTKYe0kYTirI17Cb3zOT0+TcKin9C5UrkvimKf6MFuJCG/R+vDl56mfJqE+2ZoJzkENtNQPT42CW1VopfQLqks6tFCF42O9CznoV/PQD/Us/dWwiNP0pqEukQvIR/ipBJWw6Pc1lvBTKibMCr1KB3lMomofiZ6esH1VJdTrxucUrXbfkKezakyNlUH21TzORNmlH/slIMjmymlfuCJ6se2PC+rVuvWzbYQf3DgibecyX1J6C6rZOKcpDd/vt5Sd3o/rVmrGXKYRfWi5DZ5olM9VCc8ELRPzFBOQjvjoXSoEuqBghlcA5e9hNZebcm4Tn49/bZkxVPZfeh8ezVtXemRUoyEVcmsnpAWrYOZMg8aaqnj+mtvp9aGThCs6pJ2EFzkJjavr3JEuow4ULXJrQ7FT+uDAQDA07nMX9VlPJxlBdmVXtc1G7u64yTjR3lyyc050Co3Xb8fkN+YBkXyG4Xr5+JVfcozLBz+FoBXLJQa/TrrPzm8MFPrle+4vHc/tPdFyPWLO7CTl2/JpNV5BO4rh77K4QWsXJs5gemBjQX3nS5iXTp4YWdLej29n7z/+9Z9J4xDw9c9+KKEbMHe2P+ehndXQu5N8l+fcOgSMhJODQmREAnNQ0IkRELzkBAJkdA8JERCJDQPCZHwK75j3lEJl0/gzlv0+WriZmAf31Qmb/yJnKdw388s+K6q84195m50/ClbGv4hEd8PaPBOx58h762zh/bKO+tCP7JfVeQ3v6m68QYQ5bPXpL/BvtUMo2zCweBRssE2yuwnGQr/w+goGnnJyXQl73ZMPHO/5AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Vf4CCidX9Pk4cb4AAAAASUVORK5CYII='}
          alt={projeto.nome}
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
            <h1 className="text-5xl font-bold mb-4">{projeto.nome}</h1>
            <p className="text-xl text-white/90">{projeto.descricao}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Objetivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-600"
          >
            <h2 className="text-2xl font-bold text-indigo-600 mb-3">🎯 Objetivo do Projeto</h2>
            <p className="text-gray-700 text-lg">{projeto.descricao}</p>
          </motion.div>

          {/* Funcionalidades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">✨ Funcionalidades</h2>
            <div className="grid md:grid-cols-2 gap-4">

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition"
              >
                <span className="text-indigo-600 font-bold text-xl mt-1">✓</span>
                <span className="text-gray-700">{projeto.descricao}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Aprendizados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12 p-6 bg-green-50 rounded-lg border-l-4 border-green-500"
          >
            <h2 className="text-2xl font-bold text-green-700 mb-3">📚 Aprendizados Obtidos</h2>
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
                onClick={() => {window.location.href = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzwLNzjGEeDQUmZJ8n0qvO7sS5_JTSCLqjQ&s'}}
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
