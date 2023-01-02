import QuadroPromessas from "./QuadroPromessas";

import p1 from './images/promessasDeVoo/p1.jpg'
import p2 from './images/promessasDeVoo/p2.jpg'
import p3 from './images/promessasDeVoo/p3.jpg'
import p4 from './images/promessasDeVoo/p4.jpg'
import p5 from './images/promessasDeVoo/p5.jpg'
import p6 from './images/promessasDeVoo/p6.png'
import p7 from './images/promessasDeVoo/p7.png'
import p8 from './images/promessasDeVoo/p8.png'
import p9 from './images/promessasDeVoo/p9.png'
import p10 from './images/promessasDeVoo/p10.jpg'
import p11 from './images/promessasDeVoo/p11.jpg'
import p12 from './images/promessasDeVoo/p12.jpg'
import p13 from './images/promessasDeVoo/p13.jpg'
import p14 from './images/promessasDeVoo/p14.jpg'
import p15 from './images/promessasDeVoo/p15.jpg'
import p16 from './images/promessasDeVoo/p16.jpg'
import p17 from './images/promessasDeVoo/p17.jpg'
import p18 from './images/promessasDeVoo/p18.jpg'
import p19 from './images/promessasDeVoo/p19.jpg'

import e1 from './images/promessasDeVoo/e1.jpg'
import e2 from './images/promessasDeVoo/e2.jpg'
import e3 from './images/promessasDeVoo/e3.jpg'
import e4 from './images/promessasDeVoo/e4.jpg'
import e5 from './images/promessasDeVoo/e5.jpg'
import e6 from './images/promessasDeVoo/e6.jpg'
import e7 from './images/promessasDeVoo/e7.jpg'
import e8 from './images/promessasDeVoo/e8.jpg'



function Promessas() {
 

  let promessasDeVoo = [
    {
      title: '',
      price: null,
      tech: 'Óleo sobre tela',
      size: '1.60m x 1.60m',
      image: p16,
    },
    {
      title: '',
      price: null,
      tech: 'Óleo sobre tela',
      size: '1.60m x 1.60m',
      image: p17,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '1.60m x 1.60m',
      image: p18,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '80cm x 80cm',
      image: p1,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '23cm x 15cm',
      image: p2,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '23cm x 15cm',
      image: p3,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '23cm x 15cm',
      image: p4,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '23cm x 15cm',
      image: p5,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '23cm x 15cm',
      image: p6,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '23cm x 15cm',
      image: p7,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '23cm x 15cm',
      image: p8,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '23cm x 15cm',
      image: p9,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '80cm x 80cm',
      image: p10,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '80cm x 80cm',
      image: p11,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '80cm x 80cm',
      image: p12,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '80cm x 80cm',
      image: p13,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '30cm x 80cm',
      image: p14,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '30cm x 80cm',
      image: p15,
    },
    {
      title: '',
      price: '',
      tech: 'Óleo sobre tela',
      size: '',
      image: p19,
    },
    {
      title: '',
      price: '',
      tech: 'Escultura de vidro',
      size: '21cm x 28cm',
      image: e1,
    },
    {
      title: '',
      price: '',
      tech: 'Escultura de vidro',
      size: '19cm x 26cm',
      image: e2,
    },
    {
      title: '',
      price: '',
      tech: 'Escultura de vidro',
      size: '32cm x 30cm',
      image: e3,
    },
    {
      title: '',
      price: '',
      tech: 'Escultura de vidro',
      size: '25cm x 20cm',
      image: e4,
    },
    {
      title: '',
      price: '',
      tech: 'Escultura de vidro',
      size: '15cm x 28cm',
      image: e5,
    },
    {
      title: '',
      price: '',
      tech: 'Escultura de vidro',
      size: '30cm x 28cm',
      image: e6,
    },
    {
      title: '',
      price: '',
      tech: 'Escultura de vidro',
      size: '24cm x 27cm',
      image: e7,
    },
    {
      title: '',
      price: '',
      tech: 'Escultura de vidro',
      size: '26cm x 17cm',
      image: e8,
    },
  ]
  return (<>
    <div className="Promessas">
   

      {promessasDeVoo.map(element => {
        return <QuadroPromessas  key={element.title} element={element} />
      })
      }
    </div>
    


    </>
  );
}

export default Promessas;
