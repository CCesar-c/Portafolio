import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/CCesar-c' },
    { icon: <MdOutlineMailOutline />, name: 'Email', url: 'mailto:SIM' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-linear-to-r from-gray-900 to-gray-800 text-white py-12 items-center justify-center " 
    >
      <div className="container grid justify-center items-center mx-auto px-4 max-w-6xl">
        <div className="grid  md:grid-cols-2 gap-8 mb-8">
          {/* About */}
          <motion.div whileHover={{ y: -5 }}>
            <h3 className="text-xl font-bold mb-4 bg-linear-to-r  from-indigo-400 to-pink-400 bg-clip-text text-transparent"
            style={{ color:"white" }}
            >
              Portfolio
            </h3>
            <p className="text-gray-400">
              Desenvolvedor apaixonado por criar soluções web inovadoras e experiências de usuário excepcionais.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div whileHover={{ y: -5 }}>
            <h3 className="text-xl font-bold mb-4" style={{ color:"white" }}>Redes Sociais</h3>
            <div className="flex gap-4 items-center justify-center">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-indigo-600 transition text-lg"
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Cesar Colmenarez. Todos os direitos reservados. | Desenvolvido em React
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
