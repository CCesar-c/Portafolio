import "../Styles/style.css";
import Header from "../Components/Header.jsx";

export default function Index() {
  return (
    <div id="body">
      <Header />
      <div style={{ backgroundColor: "blue", height: "50vh", width: "100vw" }}></div>
      <div style={{ backgroundColor: "red", height: "50vh", width: "100vw" }}></div>
    </div>
  );
}
