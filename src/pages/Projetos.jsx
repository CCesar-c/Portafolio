import { motion } from 'framer-motion';
import CardProjeto from '../components/CardProjeto';
export const projetos = []


export default function Projetos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-linear-to-br from-indigo-600 to-pink-600 text-white py-20 pt-32"
      >
        <div className="container mx-auto px-4 max-w-6xl text-center items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Meus Projetos</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto ">
            Explore meu portfólio de projetos desenvolvidos com tecnologias modernas e boas práticas de engenharia
          </p>
        </div>
      </motion.section>

      {/* Projetos Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projetos.map((projeto) => (
              <motion.div key={projeto.id} variants={itemVariants}>
                <CardProjeto projeto={projeto} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {projetos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-500">Nenhum projeto disponível no momento</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Estatísticas</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: projetos.length, label: 'Projetos Completados' },
              { number: '15+', label: 'Tecnologias' },
              { number: '2+', label: 'Anos de Experiência' },
              { number: '100%', label: 'Satisfação do Cliente' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
