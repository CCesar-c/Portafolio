export default function CardProjetos({id, nome, descricao, img}) {
  return (
    <div className="cardprojetos">
      <img src={img} />
      <h3>id: {id}</h3>
      <h3>nome: {nome}</h3>
      <h3>descricao: {descricao}</h3>
    </div>
  )
}
