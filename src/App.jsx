import { useState } from 'react'
import rotas from './Rutas/rotas.json'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
export default function App() {
  const rotasPath = rotas;
  const rotaCreada = createBrowserRouter(rotasPath)
  return (
    <RouterProvider router={rotaCreada} />
  )
}
