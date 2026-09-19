import "../Styles/style.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import Divisor from "../Components/Divisor.jsx";
import Globo from "../Components/Globo.jsx";
import foto from "../Public/images.png";
import All from "../Services/All.json";

const grupos = [
  { chave: "Linguagens", titulo: "Linguagens", classe: "group--lang" },
  { chave: "Framework", titulo: "Frameworks", classe: "group--framework" },
  { chave: "Bibliotecas", titulo: "Bibliotecas", classe: "group--lib" },
  { chave: "Ferramentas", titulo: "Ferramentas", classe: "group--tools" },
];

export default function Index() {
  const dados = All[0];

  return (
    <div id="body">
      <Header />
      <main className="page">
        <section className="hero">
          <article className="file">
            <div className="file__bar">
              <span className="file__dot" />
              <span className="file__dot" />
              <span className="file__dot" />
              <span className="file__name">cesar.jsx</span>
            </div>

            <pre className="code">
              <code>
                <span className="line">
                  <span className="cm">// bem-vindo ao meu portfólio</span>
                </span>
                <span className="line">
                  <span className="kw">const</span>{" "}
                  <span className="en">cesar</span>{" "}
                  <span className="pn">=</span> <span className="pn">{"{"}</span>
                </span>
                <span className="line">
                  {"  "}
                  <span className="ty">nome</span>
                  <span className="pn">:</span>{" "}
                  <span className="st">"César"</span>
                  <span className="pn">,</span>
                </span>
                <span className="line">
                  {"  "}
                  <span className="ty">funcao</span>
                  <span className="pn">:</span>{" "}
                  <span className="st">"desenvolvedor full stack"</span>
                  <span className="pn">,</span>
                </span>
                <span className="line">
                  {"  "}
                  <span className="ty">foco</span>
                  <span className="pn">:</span>{" "}
                  <span className="pn">[</span>
                  <span className="st">"web"</span>
                  <span className="pn">,</span>{" "}
                  <span className="st">"mobile"</span>
                  <span className="pn">,</span>{" "}
                  <span className="st">"automação de testes"</span>
                  <span className="pn">]</span>
                  <span className="pn">,</span>
                </span>
                <span className="line">
                  {"  "}
                  <span className="ty">aprendendo</span>
                  <span className="pn">:</span>{" "}
                  <span className="ok">true</span>
                  <span className="pn">,</span>
                </span>
                <span className="line">
                  <span className="pn">{"}"}</span>
                  <span className="pn">;</span>
                </span>
                <span className="line" />
                <span className="line">
                  <span className="fn">console</span>
                  <span className="pn">.</span>
                  <span className="fn">log</span>
                  <span className="pn">(</span>
                  <span className="st">"escrevo código que outra pessoa</span>
                </span>
                <span className="line">
                  {"  "}
                  <span className="st">consiga ler seis meses depois."</span>
                  <span className="pn">);</span> <span className="caret" />
                </span>
              </code>
            </pre>
          </article>

          <aside className="hero__side">
            <img className="avatar" src={foto} alt="Foto do César" />
            <p className="hero__lead">
              Trabalho com aplicações web e mobile do banco de dados até a
              interface. Gosto de refatorar até o código ficar{" "}
              <strong>simples de ler</strong> e de cobrir o que importa com
              testes automatizados.
            </p>
            <div className="hero__cta">
              <Link className="btn btn--primary" to="/projetos">
                Ver projetos
              </Link>
              <Link className="btn" to="/contatos">
                Entrar em contato
              </Link>
            </div>
          </aside>
        </section>

        <Divisor altura="1px" largura="100%" />

        <section>
          <h2 className="section__title">
            <span className="cm">// </span>O que eu uso no dia a dia
          </h2>

          <div className="stack">
            {grupos.map((grupo) => (
              <div
                id="content"
                className={grupo.classe}
                key={grupo.chave}
              >
                <h3>
                  <span className="kw">const</span> {grupo.titulo} = [
                </h3>
                <div className="content-languages">
                  {dados[grupo.chave].map((item) => (
                    <Globo key={item.id} nome={item.name} />
                  ))}
                </div>
                <h3>];</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
