import Quadro from "./Quadro";
import a1 from './images/aquarelas/Aquarela1.jpg'
import a2 from './images/aquarelas/Aquarela2.jpg'
import a3 from './images/aquarelas/Aquarela3.jpg'
import a4 from './images/aquarelas/Aquarela4.jpg'
import a5 from './images/aquarelas/Aquarela5.jpg'
import a6 from './images/aquarelas/Aquarela6.jpg'
import a7 from './images/aquarelas/Aquarela7.jpg'
import a8 from './images/aquarelas/Aquarela8.jpg'
import a9 from './images/aquarelas/Aquarela9.jpg'
import a10 from './images/aquarelas/Aquarela-AngelimII.jpg'
import a11 from './images/aquarelas/Aquarela11.jpg'
import o1 from './images/oleos/Tartaruguinha.jpg'
import o2 from './images/oleos/FolhaAquatica.jpg'
import o3 from './images/oleos/CiposAquaticos.jpg'
import o4 from './images/oleos/Cogumelos.jpg'
import o5 from './images/oleos/EntradaDaFloresta.jpg'
import o6 from './images/oleos/FlorDePauDeJangada.jpg'
import o7 from './images/oleos/Folhagem.jpg'
import o8 from './images/oleos/FolhagemDoChao.jpg'
import o9 from './images/oleos/FolhagemAerea.jpg'
import o10 from './images/oleos/InteriorDaFloresta.jpg'
import o11 from './images/oleos/NoChaoDoCaminho1.jpg'
import o12 from './images/oleos/NoChaoDoCaminho2.jpg'
import o13 from './images/oleos/VitoriaRegiaAbrindo.jpg'
import o14 from './images/oleos/VitoriaRegia.jpg'
import o15 from './images/oleos/FolhasNoRio.jpg'
import o16 from './images/oleos/VistaAerea.jpg'
import o17 from './images/oleos/SombraNoRio.jpg'
import o18 from './images/oleos/Folhagens.jpg'



function Galeria() {
  let aquarelas = [
    
   
    {
      title: 'Cipó Aquático II',
      price: '1.500',
      tech: 'Aquarela',
      size: '20cm x 30cm',
      image: a3,
      available: 'yes',
    },
    
    {
      title: 'Folhas soltas',
      price: '1.500',
      tech: 'Aquarela',
      size: '20cm x 30cm',
      image: a5,
      available: 'yes',
    },
    {
      title: 'De dentro da oca',
      price: '1.500',
      tech: 'Aquarela',
      size: '20cm x 30cm',
      image: a6,
      available: 'no',
    },
   
    {
      title: 'Beira de rio',
      price: '1.500',
      tech: 'Aquarela',
      size: '20cm x 30cm',
      image: a7,
      available: 'no',
    },
    {
      title: 'Angelim I',
      price: '1.500',
      tech: 'Aquarela',
      size: '20cm x 30cm',
      image: a8,
      available: 'no',
    },
    
   
    {
      title: 'Angelim II',
      price: '1.500',
      tech: 'Aquarela',
      size: '20cm x 30cm',
      image: a10,
    },
   
    
    {
      title: 'Folhas na Chuva',
      price: '1.000',
      tech: 'Aquarela',
      size: '17cm x 22cm',
      image: a4,
      available: 'no',
    },
    {
      title: 'Três folhas',
      price: '1.500',
      tech: 'Aquarela e lápis de cor',
      size: '20cm x 30cm',
      image: a1,
      available: 'no',
    },
    {
      title: 'Cipó Aquático I',
      price: '1.000',
      tech: 'Aquarela',
      size: '17cm x 22cm',
      image: a2,
      available: 'no',
    },{
      title: 'Folhas no Chão',
      price: '1.500',
      tech: 'Aquarela',
      size: '20cm x 30cm',
      image: a9,
      
    },{
      title: 'Folhas Secas',
      price: '1.500',
      tech: 'Aquarela',
      size: '20cm x 30cm',
      image: a11,
      available: 'no',
    },
  ]

  let oleos = [
    {
      title: 'Folhagem aérea',
      price: '3.600',
      tech: 'Óleo sobre tela',
      size: '41cm x 31cm',
      image: o9,
    },
    
    {
      title: 'Folha Aquática',
      price: '1.500',
      tech: 'Óleo sobre tela',
      size: '17cm x 22cm',
      image: o2
    },
    {
      title: 'Cipós Aquáticos',
      price: '1.500',
      tech: 'Óleo sobre tela',
      size: '17cm x 22cm',
      image: o3,
      available: 'no',
    },
    {
      title: 'Cogumelos',
      price: '9.000',
      tech: 'Óleo sobre tela',
      size: '60cm x 80cm',
      image: o4
    },
    {
      title: 'Entrada da Floresta',
      price: '12.000',
      tech: 'Óleo sobre tela',
      size: '80cm x 120cm',
      image: o5,
      available: 'no',
    },
    {
      title: 'Flor de pau de jangada',
      price: '9.000',
      tech: 'Óleo sobre tela',
      size: '50cm x 92cm',
      image: o6
    },
    {
      title: 'Folhagem',
      price: '10.000',
      tech: 'Óleo sobre tela',
      size: '60cm x 100cm',
      image: o7
    },
   
    {
      title: 'Tartaruguinha',
      price: '1.500',
      tech: 'Óleo sobre tela',
      size: '17cm x 22cm',
      image: o1
    },
    {
      title: 'Interior da floresta',
      price: '12.000',
      tech: 'Óleo sobre tela',
      size: '60cm x 105cm',
      image: o10
    },
    {
      title: 'Vitória régia abrindo',
      price: '4.800',
      tech: 'Óleo sobre tela',
      size: '40cm x 50cm',
      image: o13
    },
    {
      title: 'No chão do caminho I',
      price: '4.800',
      tech: 'Óleo sobre tela',
      size: '40cm x 50cm',
      image: o11
    },
    {
      title: 'No chão do caminho II',
      price: '4.300',
      tech: 'Óleo sobre tela',
      size: '40cm x 40cm',
      image: o12
    }, 
    
    {
      title: 'Vitória régia',
      price: '8.000',
      tech: 'Óleo sobre tela',
      size: '50cm x 75cm',
      image: o14
    },
    {
      title: 'Folhagem de chão',
      price: '3.600',
      tech: 'Óleo sobre tela',
      size: '41cm x 31cm',
      image: o8,
      available: 'no',
    },
    {
      title: 'Folhas no rio',
      price: '9.200',
      tech: 'Óleo sobre tela',
      size: '60cm x 90cm',
      image: o15,
      available: 'no',
    },
    {
      title: 'Vista Aérea',
      price: '7.500',
      tech: 'Óleo sobre tela',
      size: '70cm x 50cm',
      image: o16
    },
    {
      title: 'Folhagens',
      price: '4.800',
      tech: 'Óleo sobre tela',
      size: '40cm x 50cm',
      image: o18
    },
    {
      title: 'Sombra no rio',
      price: '9.000',
      tech: 'Óleo sobre tela',
      size: '60cm x 80cm',
      image: o17
    },
    
   
   
  ]
  return (<>
   <h2>ÓLEOS</h2>
    <div className="Galeria">
   

      {oleos.map(element => {
        return <Quadro element={element} />
      })
      }
    </div>
    <h2>AQUARELAS</h2>
    <div className="Galeria">
   
  
      {aquarelas.map(element => {
        return <Quadro element={element} />
      })
      }
    </div>


    </>
  );
}

export default Galeria;
