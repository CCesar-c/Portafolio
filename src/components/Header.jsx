import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent"
        >
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors relative ${
                isActive(link.path)
                  ? 'text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`font-medium py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
