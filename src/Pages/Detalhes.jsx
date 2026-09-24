import "../Styles/style.css";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { useParams } from "react-router";

export default function Detalhes() {
  const { id } = useParams();
  return (
    <div id="body">
      <Header />
      <main className="page">
        <img src={} height={100} width={100} />
      </main>
      <Footer />
    </div>
  );
}
