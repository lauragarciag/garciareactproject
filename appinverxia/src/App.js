import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer'


function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <ItemListContainer greeting='¡Bienvenidos a Inverxia!'/>
    
    </div>
  );
}

export default App;


