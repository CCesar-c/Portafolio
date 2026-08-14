import Index from "../Pages/Index";
const rotas = [
  {
    id: 0,
    path: "/",
    name: "Inicio",
    element: <Index />,
  },
  {
    id: 1,
    path: "/projetos",
    name: "projeto",
    element: <Index />,
  },
  {
    id: 2,
    path: "/detalhesProjeto",
    name: "detalhesProjeto",
    element: <Index />,
  },
  {
    id: 3,
    path: "/contatos",
    name: "contatos",
    element: <Index />,
  },
];

export default rotas;
