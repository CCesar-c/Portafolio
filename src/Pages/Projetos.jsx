import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import All from "../Services/All.json";
import CardProjetos from "../Components/CardProjetos.jsx";
export default function Projetos() {
  return (
    <div id="body">
      <Header />
      <main className="grid_page" >

        {All[0].Projetos.map((pt, i) => {
          let { id, nome, descricao, img} = pt;
          return (
            <CardProjetos key={i} id={id} nome={nome} descricao={descricao} img={img} />
          )
        })}
      </main>
      <Footer />
    </div>
  )
}
