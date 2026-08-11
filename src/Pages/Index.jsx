import "../Styles/style.css";
import Header from "../Components/Header.jsx";

export default function Index() {
  return (
    <div id="body">
      <Header />
      <div style={{ backgroundColor: "blue" }}></div>
      <div style={{ backgroundColor: "red" }}></div>
    </div>
  );
}
