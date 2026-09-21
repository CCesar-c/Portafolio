import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import All from "../Services/All.json";
import CardProjetos from "../Components/CardProjetos.jsx";
export default function Projetos() {
  return (
    <div id="body">
      <Header />
      <main className="page" >
        
        {All[0].Projetos.map((pt) =>{
        <CardProjetos />
        })}
      </main>
      <Footer />
    </div>
  )
}
