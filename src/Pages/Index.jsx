import "../Styles/style.css";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import Divisor from "../Components/Divisor.jsx";
export default function Index() {
  return (
    <div id="body">
      <Header />
      <div id="primary">
        <div id="card"></div>
        <div id="card"></div>
      </div>
      <Divisor />
      <div id="second"></div>
      <Footer />
    </div>
  );
}
