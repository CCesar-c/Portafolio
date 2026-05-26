import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { useState } from 'react'
import './style/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Rotas from './router/Rotas';

createRoot(document.getElementById('root')).render(
  <div className='flex flex-col min-h-screen'>
    <BrowserRouter>
      <Header />
      <main className='flex-1'>
        <Rotas />
      </main>
      <Footer />
    </BrowserRouter>
  </div>
)
