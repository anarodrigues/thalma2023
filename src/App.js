import './App.css';
import Galeria from './Galeria.js';
import Promessas from './Promessas.js';

import Curriculo from './Curriculo.js';
import { useState } from 'react';
import capa from './images/oleos/FolhagemAerea.jpg';
import capa2 from './images/promessasDeVoo/capacatalogo.jpg';
import curriculo from './images/curriculo.jpg';

function App() {
  const [menuItem, setMenuItem] = useState('amazonia');

  return (
    <div className="App">
      <menu>
        <div onClick={() => {setMenuItem('amazonia'); window.scrollTo({top:0,left:0,behavior:'smooth'})}}>Fragmentos da Amazônia (2023)</div>
        <div onClick={() => {setMenuItem('promessas'); window.scrollTo({top:0,left:0,behavior:'smooth'})}}>Promessas de Vôo (2003)</div>
        <div onClick={() => {setMenuItem('curriculo'); window.scrollTo({top:0,left:0,behavior:'smooth'})}}>Currículo</div>
      </menu>
      {menuItem === "amazonia" ?
        <>
          <header className="App-header">
            <img src={capa} className="Capa" alt="logo" />
            <div className="textoCapa"><h1>
              Fragmentos da Amazônia</h1>
              <h2>Thalma</h2>
            </div>
          </header>
          <Galeria />
        </> : null}
        {menuItem === "promessas" ?
        <>
          <header className="App-header">
            <img src={capa2} className="Capa" alt="logo" />
            <div className="textoCapa"><h1>
              Promessas de Vôo</h1>
              <h2>Thalma</h2>
            </div>
          </header>
          <Promessas />
        </> : null}
      {menuItem === "curriculo" ?
        <>
          <header className="CV-header">
            <img src={curriculo} className="FotoCurriculo" alt="logo" />
            <h1>Thalma de Oliveira Rodrigues</h1>
            <Curriculo />
          </header>

        </> : null}
      <footer><p>&copy; Ana Rodrigues 2023</p></footer>
    </div>
  );
}

export default App;
