import capa from './images/oleos/FolhagemAerea.jpg';
import './App.css';
import Galeria from './Galeria.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={capa} className="Capa" alt="logo" />
        <div className="textoCapa"><h1>
        Fragmentos da Amazônia</h1>
        <h3>Thalma</h3>
        </div>
        </header>
        <Galeria/>
        <footer><p>&copy; Ana Rodrigues 2023</p></footer>
    </div>
  );
}

export default App;
