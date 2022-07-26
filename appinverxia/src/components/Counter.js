import { useState } from 'react'
import "./Counter.css"

const Counter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < stock ) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div className='Counter'>
            <h1 className='ctrTitle'>{count}</h1>
            
            <button onClick={decrement}>menos</button>
            <button onClick={increment}>más</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter