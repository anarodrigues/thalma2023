import QuadroPersonas from "./QuadroPersonas";

import pe1 from './images/personas/p1.jpg'
import pe2 from './images/personas/p2.jpg'
import pe3 from './images/personas/p3.jpg'
import pe4 from './images/personas/p4.jpg'
import pe5 from './images/personas/p5.jpg'
import pe6 from './images/personas/p6.jpg'
import pe7 from './images/personas/p7.jpg'
import pe8 from './images/personas/p8.jpg'
import pe9 from './images/personas/p9.jpg'
import pe10 from './images/personas/p10.jpg'
import pe11 from './images/personas/p11.jpg'
import monalisa from './images/personas/mona-lisa.jpg'


function Personas() {

  let personas = [
    {
      title: 'Cupido e Psiquê',
      price: null,
      tech: 'Acrílica / Tela',
      size: '80cm x 80cm',
      image: pe1,
    },
    {
      title: 'Dom Quixote',
      price: null,
      tech: 'Acrílica / Tela',
      size: '80cm x 80cm',
      image: pe2,
    },
    {
      title: 'Dia',
      price: null,
      tech: 'Acrílica / Tela',
      size: '80cm x 80cm',
      image: pe3,
    },
    {
      title: 'Noite',
      price: null,
      tech: 'Acrílica / Tela',
      size: '80cm x 80cm',
      image: pe4,
    },
    {
      title: 'Hamlet',
      price: null,
      tech: 'Acrílica / Tela',
      size: '80cm x 80cm',
      image: pe5,
    },
    {
      title: 'Estranha moça amarela que um dia ousou querer ser cantora de blues',
      price: null,
      tech: 'Acrílica / Tela',
      size: '21cm x 28cm',
      image: pe6,
    },
    {
      title: 'Moça triste querendo saber onde este mundo vai dar',
      price: null,
      tech: 'Acrílica / Tela',
      size: '21cm x 28cm',
      image: pe7,
    },
    {
      title: 'Moça antiguinha com chapéu engraçado e brincos de pérola',
      price: null,
      tech: 'Acrílica / Tela',
      size: '21cm x 28cm',
      image: pe8,
    },
    {
      title: 'Moça distraída tentando se lembrar de uma coisa sem importância',
      price: null,
      tech: 'Acrílica / Tela',
      size: '21cm x 28cm',
      image: pe9,
    },
    {
      title: 'Moça deitada querendo saber porque não consegue dormir',
      price: null,
      tech: 'Acrílica / Tela',
      size: '21cm x 28cm',
      image: pe10,
    },
    {
      title: 'Moça feliz que ainda se encanta com as cores do arco-íris',
      price: null,
      tech: 'Acrílica / Tela',
      size: '21cm x 28cm',
      image: pe11,
    },
    {
      title: 'Mona Lisa',
      price: null,
      tech: 'Acrílica / Tela',
      size: '1,40m x 1m',
      image: monalisa,
    },
    
  ]
  return (<>
    <div className="Personas">
   

      {personas.map(element => {
        return <QuadroPersonas  key={element.title} element={element} />
      })
      }
    </div>
    


    </>
  );
}

export default Personas;
