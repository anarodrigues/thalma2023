
function Quadro({ element }) {

  let cotacao = 5;
  let priceCAD = parseFloat(element.price.replace(".","")) / cotacao;
  return <div className="Quadro">
    <img src={element.image} alt={element.title}/>
    <div className="title">{element.title}</div>
    <div className="details">{element.tech} - {element.size}</div>
    
    {element.available==='no' ? <div className="sold"><p>VENDIDO</p></div>:<div className="price">R$ {element.price} / CAD {priceCAD}</div>}
  </div>
}

export default Quadro;
