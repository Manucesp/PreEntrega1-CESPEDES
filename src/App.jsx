import "./App.css"

import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import ItemListCointainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavbarComponent/> 
      <ItemListCointainer greeting="Bienvenidos a la tienda"/>
      {      }
    </div>
    
  );
}


export default App;

