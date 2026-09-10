import "../Styles/style.css";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import Divisor from "../Components/Divisor.jsx";
import foto from "../Public/images.png";
import Globo from "../Components/Globo.jsx";
import All from "../Services/All.json";
export default function Index() {
  return (
    <div id="body">
      <Header />
      <div id="primary">
        <div id="card">
            <h2>Ola, seja bem-vindo ao meu portifolio...</h2>
          <h3>
            O meu nome e cesar gosto de aprender programação e novas tecnicas de fazer mais
            optimzas e melhores com mais fluidez.
          </h3>
        </div>
        <div id="card">
          <img src={foto.toString()} height={"100%"} width={"100%"} />
        </div>
      </div>
      <Divisor />
      <div id="second">
        <h2>Linguagem que domino e uso</h2>
        <div className="content-languages" >
          {All[0].Linguagens.map((ln, i) => {
            return <Globo key={i} nome={ln.name} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
