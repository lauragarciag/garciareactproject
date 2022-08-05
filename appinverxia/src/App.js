import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCount from './components/ItemCount';





function App() {
  return (
    <div className="App">
     
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos de la categoria '}/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
      </Routes>
      <ItemCount/>
      
      </BrowserRouter>

      

    

    </div>
  );
}

export default App;


