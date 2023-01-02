import QuadroCorredores from "./QuadroCorredores.js";

import c1 from './images/corredores/c1.jpg'
import c2 from './images/corredores/c2.jpg'
import c3 from './images/corredores/c3.jpg'
import c4 from './images/corredores/c4.jpg'
import c5 from './images/corredores/c5.jpg'

function Personas() {

  let corredores = [
    {
      title: '',
      price: null,
      tech: '',
      size: '',
      image: c1,
    },
    {
      title: '',
      price: null,
      tech: '',
      size: '',
      image: c2,
    },
    {
      title: '',
      price: null,
      tech: '',
      size: '',
      image: c3,
    },
    {
      title: '',
      price: null,
      tech: '',
      size: '',
      image: c4,
    },
    {
      title: '',
      price: null,
      tech: '',
      size: '',
      image: c5,
    },
    
  ]
  return (<>
    <div className="Personas">
   

      {corredores.map(element => {
        return <QuadroCorredores  key={element.title} element={element} />
      })
      }
    </div>
    


    </>
  );
}

export default Personas;
