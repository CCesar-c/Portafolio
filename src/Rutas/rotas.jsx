import Index from "../Pages/Index";
import Projetos from "../Pages/Projetos";
import Detalhes from "../Pages/Detalhes";
import Contatos from "../Pages/Contatos";
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
    name: "Projeto",
    element: <Projetos />,
  },
  {
    id: 2,
    path: "/detalhesProjeto",
    name: "DetalhesProjeto",
    element: <Detalhes />,
  },
  {
    id: 3,
    path: "/contatos",
    name: "Contatos",
    element: <Contatos />,
  },
];

export default rotas;
