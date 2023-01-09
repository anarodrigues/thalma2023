import QuadroPersonas from './QuadroPersonas'
import pic1 from './images/PIC/p1.jpg'
import pic2 from './images/PIC/p2.jpg'
import pic3 from './images/PIC/p3.jpg'
import pic4 from './images/PIC/p4.jpg'
import pic5 from './images/PIC/p5.jpg'
import pic6 from './images/PIC/p6.jpg'
import pic7 from './images/PIC/p7.jpg'

function PIC() {

  let pic = [
    {
      title: 'Campeche',
      price: null,
      tech: 'Óleo sobre tela',
      size: '30cm x 30cm',
      image: pic1,
    },
    {
      title: 'Flor de manjericão',
      price: null,
      tech: 'Óleo sobre tela',
      size: '80cm x 80cm',
      image: pic2,
    },
    {
      title: 'Flores 2',
      price: null,
      tech: 'Óleo sobre tela',
      size: '80cm x 60cm',
      image: pic3,
    },
    {
      title: 'Flores',
      price: null,
      tech: 'Óleo sobre tela',
      size: '80cm x 60cm',
      image: pic4,
    },
    {
      title: 'Pena Chilena',
      price: null,
      tech: 'Óleo sobre tela',
      size: '40cm x 50cm',
      image: pic5,
    },
    {
      title: 'Penas de ritual',
      price: null,
      tech: 'Óleo sobre tela',
      size: '50cm x 40cm',
      image: pic6,
    },
    {
      title: 'Peracanga',
      price: null,
      tech: 'Óleo sobre tela',
      size: '100cm x 60cm',
      image: pic7,
    },
    
  ]
  return (<>
    <div className="Personas">
   

      {pic.map(element => {
        return <QuadroPersonas  key={element.title} element={element} />
      })
      }
    </div>
    


    </>
  );
}

export default PIC;
