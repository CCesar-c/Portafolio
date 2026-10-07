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
          <br /> 
          <h2>{All[0].Projetos[Number(id)].nome}</h2>
          <h4>{All[0].Projetos[Number(id)].descricao_completa}</h4>
          <br /> 
          <a
            href={All[0].Projetos[Number(id)].github} 
            
            style={{ textDecoration:"none", color:"black", background:"var(--text)", padding:"5px", borderRadius:"var(--radius)", textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row", backdropFilter:"blur(10)"}}
        >
            <IoLogoGithub  style={{ height:"40px", width:"40px" }}  />
           <h5 style={{ margin:"10px", fontSize:"20px" }} >Github</h5>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
