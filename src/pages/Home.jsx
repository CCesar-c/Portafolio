import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  alert("Refazer")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS', "Expo (React Native)", 'selenium (python)', 'cypress', 'Unity', 'C#', 'Js (POO)', 'Python (Panda)', 'Python (TKinter)', 'Java ', 'Android Studio' ] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'SQL', 'Mysql', 'PgAdimn', "C#", 'Axios' ] },
    { category: 'Ferramentas', items: ['Git', 'VS Code', 'Figma', 'Github'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hero relative"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hero-content"
        >
          {/* Nome */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
          >
            Cesar Colmenarez
          </motion.h1>

          {/* Área de Atuação */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-3xl text-indigo-200 mb-4 font-semibold"
          >
            Desenvolvedor Full Stack
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
          >
            Criando soluções web inovadoras que transformam ideias em experiências digitais incríveis
          </motion.p>

          {/* Botões */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="hero-buttons"
          >
            <Link to="/projetos" className="btn btn-primary">
              Explorar Meus Projetos
            </Link>
            <Link to="/contato" className="btn btn-outline">
              Entrar em Contato
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-opacity-60"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Sobre Seção */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Sobre Mim</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Sou um desenvolvedor apaixonado com experiência em criar aplicações web modernas e escaláveis.
                Com formação em Engenharia de Software, combino conhecimentos técnicos sólidos com uma visão criativa
                para resolver problemas complexos.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Minha jornada profissional me ensinou a valorizar a qualidade do código, a experiência do usuário
                e a colaboração efetiva em equipe. Estou sempre buscando aprender novas tecnologias e aplicar
                as melhores práticas de desenvolvimento.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlUoO5FFxdAbZ_grZbk5KwcUNGa6kR2yOoE4dMr3kyUGoQmmXaHlLVZc85HEOKB5Rab7frJH24J9iucd4pc3_gStwh_344ySojzS42plWjw&s=10"
                alt="Perfil"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Objetivos Profissionais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Objetivos Profissionais
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: '🎯',
                title: 'Excelência Técnica',
                desc: 'Desenvolver soluções de alta qualidade usando as melhores práticas e padrões de engenharia',
              },
              {
                icon: '🚀',
                title: 'Inovação Contínua',
                desc: 'Explorar novas tecnologias e metodologias para criar produtos disruptivos e impactantes',
              },
              {
                icon: '🤝',
                title: 'Impacto Social',
                desc: 'Criar aplicações que resolvem problemas reais e melhoram a vida das pessoas',
              },
            ].map((obj, idx) => (
              <motion.div key={idx} variants={itemVariants} className="card">
                <div className="text-5xl mb-4">{obj.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{obj.title}</h3>
                <p className="text-gray-600">{obj.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-800  "
          >
            Tecnologias & Competências
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center gap-2"
                style={{ color:"white"}}
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="skill-tag cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-indigo-600 to-pink-600  " >
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Pronto para Colaborar?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl  mb-8 "
            style={{ color:'white'}}
          >
            Estou aberto a novas oportunidades, projetos interessantes e parcerias estratégicas
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contato" className="btn btn-outline text-lg">
              Entre em Contato
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
