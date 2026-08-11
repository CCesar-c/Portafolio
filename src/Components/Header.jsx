import rotas from "../Rutas/rotas.jsx";

export default function Header() {
  return (
    <div id="header">
      {rotas.map((rt) => {
        return <button key={rt.id}>{rt.name}</button>;
      })}
    </div>
  );
}
