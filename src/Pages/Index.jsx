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
            O meu nome e cesar gosto de aprender programação e novas tecnicas de
            fazer mais optimzas e melhores com mais fluidez.
          </h3>
        </div>
        <div id="card">
          <img src={foto.toString()} height={"10%"} width={"10%"} />
        </div>
      </div>
      <Divisor />

      <h2>Com o que eu trabalho?</h2>

      <div id="second">
        <div id="content">
          <h3>Linguagens</h3>
          <div className="content-languages">
            {All[0].Linguagens.map((ln, i) => {
              return <Globo key={i} nome={ln.name} />;
            })}
          </div>
        </div>

        <div id="content">
          <h3>FrameWorks</h3>
          <div className="content-languages">
            {All[0].Framework.map((ln, i) => {
              return <Globo key={i} nome={ln.name} />;
            })}
          </div>
        </div>

        <div id="content">
          <h3>Bibliotecas</h3>
          <div className="content-languages">
            {All[0].Bibliotecas.map((ln, i) => {
              return <Globo key={i} nome={ln.name} />;
            })}
          </div>
        </div>

        <div id="content" >
          <h3>Ferramentas</h3>
          <div className="content-languages">
            {All[0].Ferramentas.map((ln, i) => {
              return <Globo key={i} nome={ln.name} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
