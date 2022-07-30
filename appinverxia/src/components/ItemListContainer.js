import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProductsInverxia } from '../asyncMock';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsInverxia().then(products => {
            setProducts(products)
        })
    }, [])

    const prodsCom = products.map(prod => <li key={prod.id}>{prod.name}</li>)
    return ( 

        <>
            <h1 className='Greeting'>{greeting}</h1>
       
            <ItemList products={products}/>
        </>

    )
}

export default ItemListContainer;