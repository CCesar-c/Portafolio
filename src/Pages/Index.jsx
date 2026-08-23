import "../Styles/style.css";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import Divisor from "../Components/Divisor.jsx";
export default function Index() {
  return (
    <div id="body">
      <Header />
      <div id="primary">
        <div id="card">
          <h3>
            Ola, seja bem-vindo ao meu portifolio... O meu nome e cesar gosta de
            aprender programação e novas tecnicas de fazer mais optimzas e
            melhores com mais fluidez.
          </h3>
        </div>
        <div id="card">
          <img src="" />
        </div>
      </div>
      <Divisor />
      <div id="second"></div>
      <Footer />
    </div>
  );
}
