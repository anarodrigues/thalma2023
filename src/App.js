import './App.css';
import Galeria from './Galeria.js';
import Promessas from './Promessas.js';
import Personas from './Personas.js';

import Curriculo from './Curriculo.js';
import { useState } from 'react';
import capa1 from './images/oleos/FolhagemAerea.jpg';
import capa2 from './images/promessasDeVoo/capacatalogo.jpg';
import capa3 from './images/personas/capa.jpg';

import curriculo from './images/curriculo.jpg';

function App() {
  const [menuItem, setMenuItem] = useState('amazonia');

  return (
    <div className="App">
      <menu>
        <div onClick={() => {setMenuItem('amazonia'); window.scrollTo({top:0,left:0,behavior:'smooth'})}}>Fragmentos da Amazônia (2023)</div>
        <div onClick={() => {setMenuItem('personas'); window.scrollTo({top:0,left:0,behavior:'smooth'})}}>Personas (2005)</div>
        <div onClick={() => {setMenuItem('promessas'); window.scrollTo({top:0,left:0,behavior:'smooth'})}}>Promessas de Vôo (2003)</div>
        <div onClick={() => {setMenuItem('curriculo'); window.scrollTo({top:0,left:0,behavior:'smooth'})}}>Contato e Currículo</div>
      </menu>
      {menuItem === "amazonia" ?
        <>
          <header className="App-header">
            <img src={capa1} className="Capa" alt="logo" />
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
        {menuItem === "personas" ?
        <>
          <header className="App-header">
            <img src={capa3} className="Capa" alt="logo" />
            <div className="textoCapa"><h1>
              Personas</h1>
              <h2>Thalma</h2>
            </div>
          </header>
          <Personas />
        </> : null}
      {menuItem === "curriculo" ?
        <>
          <header className="CV-header">
            <img src={curriculo} className="FotoCurriculo" alt="logo" />
            <h1>Thalma de Oliveira Rodrigues</h1>
            <p>thalma@estudiothalma.com.br - Belo Horizonte, MG, Brasil</p>
            <p><i>Galeria Beatriz Abi-Acl</i>. Rua Santa Catarina, 1155, Belo Horizonte, MG. +55 (31) 3291- 2101</p>
            <Curriculo />
          </header>

        </> : null}
      <footer><p>&copy; Ana Rodrigues 2023</p></footer>
    </div>
  );
}

export default App;
