import "../Styles/style.css";
import All from "../Services/All.json";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { Link, useParams } from "react-router";
import { IoLogoGithub } from "react-icons/io";
export default function Detalhes() {
  const { id } = useParams();
  return (
    <div id="body">
      <Header />
      <main className="flex_page">
        <div className="box_page" >
          <img src={All[0].Projetos[Number(id)].img} />
          <h4>{All[0].Projetos[Number(id)].nome}</h4>
          <h4>{All[0].Projetos[Number(id)].descricao}</h4>
          <a href={All[0].Projetos[Number(id)].github}>
            <IoLogoGithub height={100} width={100} />
          Github</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
