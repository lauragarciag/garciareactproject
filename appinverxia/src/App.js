import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { CartContextProvider } from './context/CartContext'
import Checkout from './components/checkout'


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Todos nuestros cursos'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Cursos'/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />}/>  
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}



export default App;