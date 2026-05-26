import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const projetos = []

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
          src={projeto.imagem}
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
            <p className="text-xl text-white/90">{projeto.descricaoCurta}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Descrição Completa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Descrição Completa</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{projeto.descricaoCompleta}</p>
          </motion.div>

          {/* Objetivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-600"
          >
            <h2 className="text-2xl font-bold text-indigo-600 mb-3">🎯 Objetivo do Projeto</h2>
            <p className="text-gray-700 text-lg">{projeto.objetivo}</p>
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
              {projeto.funcionalidades.map((func, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition"
                >
                  <span className="text-indigo-600 font-bold text-xl mt-1">✓</span>
                  <span className="text-gray-700">{func}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Desafios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 p-6 bg-amber-50 rounded-lg border-l-4 border-amber-500"
          >
            <h2 className="text-2xl font-bold text-amber-700 mb-3">⚡ Desafios & Dificuldades</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{projeto.desafios}</p>
          </motion.div>

          {/* Aprendizados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12 p-6 bg-green-50 rounded-lg border-l-4 border-green-500"
          >
            <h2 className="text-2xl font-bold text-green-700 mb-3">📚 Aprendizados Obtidos</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{projeto.aprendizados}</p>
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
              {projeto.tecnologias.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="skill-tag cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
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
                href={projeto.repositorio}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary flex-1 text-center"
              >
                💻 Repositório GitHub
              </motion.a>
              <motion.a
                href={projeto.deploy}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary flex-1 text-center"
              >
                🚀 Ver em Produção
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

      {/* Projetos Relacionados */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Outros Projetos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projetos
              .filter((p) => p.id !== projeto.id)
              .slice(0, 2)
              .map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="card"
                >
                  <img
                    src={p.imagem}
                    alt={p.nome}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{p.nome}</h3>
                  <p className="text-gray-600 mb-4">{p.descricaoCurta}</p>
                  <Link to={`/projeto/${p.slug}`} className="btn btn-primary">
                    Ver Detalhes
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
