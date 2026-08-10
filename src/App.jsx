import { useState } from "react";
import rotas from "./Rutas/rotas.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./Pages/Index";
export default function App() {
  const rotasPath = rotas;
  const rotaCreada = createBrowserRouter(rotasPath);
  return <RouterProvider router={rotaCreada} />;
}
