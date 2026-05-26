import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);

    // Simular envio do formulário
    setTimeout(() => {
      setEnviado(true);
      setCarregando(false);
      setFormData({ nome: '', email: '', assunto: '', mensagem: '' });

      // Resetar mensagem de sucesso após 3 segundos
      setTimeout(() => setEnviado(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '✉️',
      title: 'Email',
      value: 'seu-email@example.com',
      link: 'mailto:seu-email@example.com',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/seuusuario',
      link: 'https://linkedin.com',
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'github.com/seuusuario',
      link: 'https://github.com',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-indigo-600 to-pink-600 text-white py-20 pt-32"
      >
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades, projetos interessantes e conversas sobre tecnologia
          </p>
        </div>
      </motion.section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="card text-center group cursor-pointer"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-indigo-600 font-semibold hover:text-pink-600 transition">
                  {info.value}
                </p>
              </motion.a>
            ))}
          </div>

          <div className="h-1 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full mb-16" />

          {/* Formulário */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Mapa ou Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Vamos Conversar!</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Preencha o formulário ao lado e eu responderei assim que possível. Normalmente respondo em 24 horas.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">⏱️ Horário de Resposta</h3>
                  <p className="text-gray-600">Segunda a Sexta: 9h - 18h</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">🌍 Localização</h3>
                  <p className="text-gray-600">São Paulo, Brasil</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">💬 Preferência de Comunicação</h3>
                  <p className="text-gray-600">Email ou LinkedIn para assuntos profissionais</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-bold text-gray-800 mb-4">Siga-me nas Redes Sociais</h3>
                <div className="flex gap-4">
                  {[
                    { icon: '💼', url: 'https://linkedin.com' },
                    { icon: '💻', url: 'https://github.com' },
                    { icon: '🐦', url: 'https://twitter.com' },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 flex items-center justify-center text-white text-xl hover:shadow-lg transition-shadow"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Formulário */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="card"
            >
              {enviado && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 font-semibold"
                >
                  ✓ Mensagem enviada com sucesso! Obrigado por entrar em contato.
                </motion.div>
              )}

              <div className="form-group">
                <label htmlFor="nome" className="block font-semibold text-gray-800 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="block font-semibold text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu-email@example.com"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition"
                />
              </div>

              <div className="form-group">
                <label htmlFor="assunto" className="block font-semibold text-gray-800 mb-2">
                  Assunto
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="trabalho">Oportunidade de Trabalho</option>
                  <option value="projeto">Proposta de Projeto</option>
                  <option value="colaboracao">Colaboração</option>
                  <option value="feedback">Feedback</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensagem" className="block font-semibold text-gray-800 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  placeholder="Escreva sua mensagem aqui..."
                  rows="5"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={carregando}
                className="btn btn-primary w-full font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {carregando ? '⏳ Enviando...' : '✉️ Enviar Mensagem'}
              </motion.button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Seus dados estarão seguros e não serão compartilhados.
              </p>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
