
function Quadro({ element }) {

  function MouseClick(event) {
    event.target.style.height = '100vh';
    event.target.style.width = 'auto';

  }
  function DoubleClick(event){
    event.target.style.height = '240px';
    event.target.style.width="auto";
  }

  let cotacao = 5;
  let priceCAD = parseFloat(element.price.replace(".","")) / cotacao;
  return <div className="Quadro">
    <img src={element.image} onClick={MouseClick} onDoubleClick={DoubleClick} alt={element.title}/>
    <div className="title">{element.title}</div>
    <div className="details">{element.tech} - {element.size}</div>
    <div className="price">R$ {element.price} / CAD {priceCAD}</div>
    {element.available==='no' ? <div className="sold"><p>VENDIDO</p></div>:null}
  </div>
}

export default Quadro;
