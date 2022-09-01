import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    console.log(CartContext)
    
    const quantity = getQuantity()

    return(
        <Link to='/cart' className="CartWidget">
            <img src="https://lauragarcia.cl/wp-content/uploads/2022/07/carrito-de-compras.png" alt='cart-widget' className='CartImg'/>
            { quantity }
        </Link>
    );
}

export default CartWidget