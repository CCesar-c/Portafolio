import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import DetalheProjeto from "../pages/DetalheProjeto";
import Contato from "../pages/Contato";

function Rotas() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/projeto/:slug" element={<DetalheProjeto />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
    )
}

export default Rotas;