
function QuadroCorredores({ element }) {

  function MouseClick(event) {
    event.target.style.width = '90vw';
    event.target.style.height = 'auto';

  }
  function DoubleClick(event){
    event.target.style.height = '400px';
    event.target.style.width="auto";
  }

  function handleComprar(event){
    let subject = "Interesse no quadro "+element.title+" no valor de R$"+element.price;
    let text = "Olá, Thalma.%0d%0a %0d%0a Meu nome é: %0d%0a e eu gostaria de saber mais informações sobre o quadro "+element.title+" no valor de R$"+element.price+".%0d%0a %0d%0a Atenciosamente, \n";
    let location = 'mailto:thalma@studiothalma.com.br?subject='+subject+'&body='+text;
    window.location = location; 
  }
  let cotacao = 5;
  let priceCAD = '';
  let priceR = 'sob consulta';
  
  if (element.price) {
    priceR = 'R$ '+element.price;
    priceCAD = " -- CAD "+parseFloat(element.price.replace(".","")) / cotacao;
  }
  return <div className="QuadroCorredores">
    <img src={element.image} onClick={MouseClick} onDoubleClick={DoubleClick} alt={element.title}/>
    <div className="title">{element.title}</div>
    <div className="details">{element.tech}</div>
    <div className="details">{element.size}</div>
    {/* {element.available==='no' ? <div className="sold"><p>ADQUIRIDO</p></div>:<div className="Comprar"><button onClick={handleComprar}>CONTACTAR A ARTISTA</button></div>} */}
  </div>
}

export default QuadroCorredores;
