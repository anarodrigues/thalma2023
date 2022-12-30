import './App.css';
import Galeria from './Galeria.js';
import Curriculo from './Curriculo.js';
import { useState } from 'react';
import capa from './images/oleos/FolhagemAerea.jpg';
import curriculo from './images/curriculo.jpg';

function App() {
  const [menuItem, setMenuItem] = useState('amazonia');

  return (
    <div className="App">
      <menu>
        <div onClick={() => {setMenuItem('amazonia'); window.scrollTo({top:0,left:0,behavior:'smooth'})}}>Fragmentos da Amazônia</div>
        <div onClick={() => {setMenuItem('curriculo'); window.scrollTo({top:0,left:0,behavior:'smooth'})}}>Currículo</div>
      </menu>
      {menuItem === "amazonia" ?
        <>
          <header className="App-header">
            <img src={capa} className="Capa" alt="logo" />
            <div className="textoCapa"><h1>
              Fragmentos da Amazônia</h1>
              <h3>Thalma</h3>
            </div>
          </header>
          <Galeria />
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
