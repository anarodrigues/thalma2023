
function Quadro({ element }) {

  function MouseClick(event) {
    // event.target.style.width = '90vw';
    // event.target.style.height = 'auto';

  }
  function DoubleClick(event){
    // event.target.style.height = '240px';
    // event.target.style.width="auto";
  }

  function handleComprar(event){
    let subject = "Interesse no quadro "+element.title+" no valor de R$"+element.price;
    let text = "Olá, Thalma.%0d%0a %0d%0a Meu nome é: %0d%0a e eu gostaria de saber mais informações sobre o quadro "+element.title+" no valor de R$"+element.price+".%0d%0a %0d%0a Atenciosamente, \n";
    let location = 'mailto:thalma@studiothalma.com.br?subject='+subject+'&body='+text;
    window.location = location; 
  }
  let cotacao = 5;
  let priceCAD = parseFloat(element.price.replace(".","")) / cotacao;
  return <div className="Quadro">
    <img src={element.image} onClick={MouseClick} onDoubleClick={DoubleClick} alt={element.title}/>
    <div className="title">{element.title}, 2023</div>
    <div className="details">{element.tech} - {element.size}</div>
    <div className="price">R$ {element.price} / CAD {priceCAD}</div>
    {element.available==='no' ? <div className="sold"><p>VENDIDO</p></div>:<div className="Comprar"><button onClick={handleComprar}>CONTACTAR A ARTISTA</button></div>}
  </div>
}

export default Quadro;
