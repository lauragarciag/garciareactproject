import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'






function App() {
  return (
    <div className="App">
     
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Programas de Formación'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Programas por categoria '}/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
      </Routes>

      
      </BrowserRouter>

      

    

    </div>
  );
}

export default App;


